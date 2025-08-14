import crypto from "crypto";
import pkg from "pg";
import fs from "fs";

const { Pool } = pkg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const algorithm = "aes-256-gcm";

function decrypt(iv, encrypted, authTag) {
  if (!iv || !encrypted || !authTag) {
    return null;
  }

  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(process.env.ENCRYPTION_KEY, "hex"),
    Buffer.from(iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(authTag, "hex"));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

async function exportAndDeleteEmails() {
  const { rows } = await pool.query(
    "SELECT iv, encrypted, auth_tag FROM beta_emails"
  );

  const emails = [];
  const validRows = [];
  rows.forEach((row) => {
    const email = decrypt(row.iv, row.encrypted, row.auth_tag);
    if (email) {
      emails.push(email);
      validRows.push(row);
    }
  });

  fs.writeFileSync("emails.csv", emails.join("\n"), "utf8");
  console.log(`Exported ${emails.length} emails`);

  for (const row of validRows) {
    await pool.query(
      "DELETE FROM beta_emails WHERE iv=$1 AND encrypted=$2 AND auth_tag=$3",
      [row.iv, row.encrypted, row.auth_tag]
    );
  }
  console.log(`Deleted ${validRows.length} rows from database`);
}

exportAndDeleteEmails().catch(console.error);

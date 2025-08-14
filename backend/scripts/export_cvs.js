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

async function exportEmails() {
  const { rows } = await pool.query(
    "SELECT iv, encrypted, auth_tag FROM beta_emails"
  );

  const emails = rows
    .map((row) => decrypt(row.iv, row.encrypted, row.auth_tag))
    .filter(Boolean);

  fs.writeFileSync("emails.csv", emails.join("\n"), "utf8");
  console.log(`Exported ${emails.length} emails`);
}

exportEmails().catch(console.error);

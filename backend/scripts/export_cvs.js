import dotenv from "dotenv";
import crypto from "crypto";
import fs from "fs";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const algorithm = "aes-256-gcm";

function decrypt({ iv, encrypted, authTag }) {
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

(async () => {
  const result = await pool.query(
    "SELECT iv, encrypted, auth_tag FROM beta_emails"
  );
  const emails = result.rows.map((row) => decrypt(row));

  const csv = "email\n" + emails.join("\n");
  fs.writeFileSync("beta_testers.csv", csv);

  console.log(`Exported ${emails.length} emails to beta_testers.csv`);
  process.exit(0);
})();

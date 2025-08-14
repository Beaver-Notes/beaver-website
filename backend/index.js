import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import crypto from "crypto";
import pkg from "pg";

app.use(
  cors({
    origin: process.env.WEBSITE_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

dotenv.config();
const { Pool } = pkg;
const app = express();
app.use(bodyParser.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const algorithm = "aes-256-gcm";
const ivLength = 16;

function encrypt(text) {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(process.env.ENCRYPTION_KEY, "hex"),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");
  return { iv: iv.toString("hex"), encrypted, authTag };
}

app.post("/signup", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send({ error: "Email required" });

  const { iv, encrypted, authTag } = encrypt(email);
  await pool.query(
    "INSERT INTO beta_emails (iv, encrypted, auth_tag) VALUES ($1, $2, $3)",
    [iv, encrypted, authTag]
  );

  res.send({ message: "Thanks! You’re on the beta list." });
});

app.listen(3000, () => console.log("Backend running on port 3000"));

# Beaver Website Backend

This backend is designed to securely collect and manage email addresses for beaver pocket's closed beta testing program. It is built with a focus on data privacy and deployment flexibility.

## 📑 Table of Contents

1. [✨ Key Features](#-key-features)
2. [📂 Project Structure](#-project-structure)
3. [🔐 Security Features](#-security-features)
4. [⚙️ Setup Instructions](#️-setup-instructions)
   - [1. Clone the repository](#1-clone-the-repository)
   - [2. Generate an encryption key](#2-generate-an-encryption-key)
   - [3. Start the services](#3-start-the-services)
   - [4. Configure DNS](#-4-configure-dns)
5. [📨 Using the API](#-using-the-api)
6. [📤 Exporting Emails](#-exporting-emails)

## ✨ Key Features

- **AES-256-GCM encrypted email storage**, all addresses are encrypted at rest, with keys kept out of source control.
- **Containerized architecture**, packaged with Docker, running PostgreSQL and a hardened Nginx reverse proxy.
- **Automated database provisioning**, database tables are created automatically on first startup.
- **Export utility**, decrypts and formats stored emails into a CSV compatible with Closed Testing imports.

## 📂 Project Structure

```
beaver-website/
    backend/
        index.js # Backend server
        package.json
        .env # Environment variables
        scripts
            export_cvs.js
        db-init/
            init.sql # Creates database table on first run
        nginx.conf
        docker-compose.yml

```

## 🔐 Security Features

- **AES-256-GCM encryption**: Emails are encrypted at rest in the database.
- **Environment-based secret keys**: Encryption key stored in `.env` or Docker secrets.
- **No plaintext storage**: Emails are only decrypted during export.
- **HTTPS via Nginx**: TLS termination with Let's Encrypt.
- **Private networking**: Database is not exposed to the public internet.

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Beaver-Notes/beaver-website.git
cd beaver-website/backend
```

### 2. Generate an encryption key

```bash
openssl rand -hex 32
```

Copy it into `.env`:

```
ENCRYPTION_KEY=your_64_char_hex_key_here
DATABASE_URL=postgres://postgres:postgres@db:5432/emails
```

> **Never commit `.env` to version control.**

---

### 3. Start the services

```bash
docker compose up -d --build
```

Services:

- **backend**: Node.js API
- **db**: PostgreSQL database
- **nginx**: Reverse proxy with HTTPS

### 🌐 4. Configure DNS

Point `db.example.com` to the server’s IP address.
Update `nginx.conf` with your domain and TLS certificate paths.

## 📨 Using the API

**POST `/signup`**
Accepts JSON:

```json
{ "email": "user@example.com" }
```

Response:

```json
{ "message": "Thanks! You’re on the beta list." }
```

---

## 📤 Exporting Emails

Run inside the backend container:

```bash
docker compose exec backend node export_cvs.js
```

This generates `beta_testers.csv` in the current directory:

```
email
user1@example.com
user2@example.com
```


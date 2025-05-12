# 🗃️ Datenbank-Microservice – AI-Docverwalter

Dieser Microservice stellt die PostgreSQL-Datenbankanbindung für das AI-Dokumentenverwaltungssystem bereit. Er enthält ein Prisma-Modell für Benutzer (inkl. Admins) und wird über Docker betrieben.

## 🚀 Schnellstart

### 1. PostgreSQL-Datenbank in Docker starten

```bash
docker run --name ai-postgres \
  -e POSTGRES_PASSWORD=postgres123 \
  -e POSTGRES_DB=ai_doc_db \
  -p 5432:5432 \
  -d postgres

#2. .env Datei erstellen
env

DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/ai_doc_db"
PORT=4001

# 3. Prisma setup
bash

npx prisma generate
npx prisma migrate dev --name init
Optional: Prisma Studio (GUI für Datenbank)

bash
npx prisma studio

# 4. Starten des Services

bash

npm install
npm run dev
Der Microservice läuft nun z. B. unter:

bash

http://localhost:4001/users/create-admin


# 📦 Features

PostgreSQL-Datenbank über Docker

Prisma ORM

REST-Route zum Erstellen von Admin-Usern

Bereit für Authentifizierung, Dokumentenspeicherung und Erweiterung

## 🔧 Hauptabhängigkeiten (runtime)

```bash
npm install express prisma @prisma/client dotenv bcrypt
npm install --save-dev typescript ts-node @types/node @types/express @types/bcrypt

Paket	Zweck
typescript	TypeScript-Compiler
ts-node	TypeScript direkt im Node.js-Kontext ausführen
@types/node	Typdefinitionen für Node.js
@types/express	Typdefinitionen für Express
@types/bcrypt	Typdefinitionen für bcrypt

npx prisma studio
Öffnet eine Admin-Oberfläche unter: http://localhost:5555

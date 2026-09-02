// API de referência para execução fora do GitHub Pages.
// Em produção, inclua autenticação, autorização, logs, criptografia e controles corporativos.
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(__dirname, "data");
fs.mkdirSync(dataDir, { recursive: true });
const db = new Database(path.join(dataDir, "demandas.db"));
db.exec(`CREATE TABLE IF NOT EXISTS requests (
  id TEXT PRIMARY KEY, title TEXT NOT NULL, category TEXT NOT NULL,
  priority TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL,
  requester TEXT NOT NULL, created_at TEXT NOT NULL, history TEXT NOT NULL, rating INTEGER
)`);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok" }));
app.get("/requests", (_, res) => {
  const rows = db.prepare("SELECT * FROM requests ORDER BY created_at DESC").all();
  res.json(rows.map((row) => ({ ...row, createdAt: row.created_at, history: JSON.parse(row.history) })));
});
app.post("/requests", (req, res) => {
  const item = req.body;
  if (!item?.id || !item?.title || !item?.description) return res.status(400).json({ error: "Dados incompletos" });
  db.prepare(`INSERT INTO requests VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(item.id, item.title, item.category, item.priority, item.description, item.status, item.requester,
      item.createdAt, JSON.stringify(item.history || []), item.rating || null);
  res.status(201).json(item);
});

app.listen(process.env.PORT || 3333, () => console.log("API em http://localhost:3333"));

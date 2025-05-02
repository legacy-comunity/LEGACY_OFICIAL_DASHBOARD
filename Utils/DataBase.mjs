import initSqlJs from 'sql.js';
import { join, dirname } from 'path';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));
const dbFolder = join(__dirname, '../DataBase');
if (!existsSync(dbFolder)) mkdirSync(dbFolder);

const dbPath = join(dbFolder, 'DataBase.sqlite');

const SQL = await initSqlJs();

let db;
if (existsSync(dbPath)) {
  const fileBuffer = readFileSync(dbPath);
  db = new SQL.Database(fileBuffer);
} else {
  db = new SQL.Database();
}

const schema = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
  );
`;
db.run(schema);
save();

function save() {
  const data = db.export();
  writeFileSync(dbPath, data);
}

const lib = {
  run(sql, params = []) {
    db.run(sql, params);
    save();
  },
  exec(sql, params = []) {
    const stmt = db.prepare(sql);
    stmt.bind(params);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  },
  prepare(sql) {
    const stmt = db.prepare(sql);
    return {
      run: (...params) => {
        stmt.bind(params);
        stmt.step();
        stmt.free();
        save();
      },
      all: (...params) => {
        stmt.bind(params);
        const res = [];
        while (stmt.step()) {
          res.push(stmt.getAsObject());
        }
        stmt.free();
        return res;
      }
    };
  },
  get db() {
    return db;
  }
};

export default lib;
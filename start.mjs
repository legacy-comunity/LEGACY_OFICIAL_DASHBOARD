import { color } from './Utils/Colors.mjs';
import { log } from './Utils/ShowLogs.mjs';
import express from 'express';
import { initSocket } from './Utils/Socket.mjs';
const app = express();
const PORT = 10000;
import backend from './Back/Back.mjs';

const server = app.listen(PORT, '127.0.0.1', () => {
  console.clear();
  log({
    borderColor: 'brightMagenta',
    lines: [
      { text: `✨ Open http://localhost:${PORT}`, color: 'brightYellow' },
      { text: `⚙️ Settings http:/localhost:${PORT}/settings`, color: 'brightGreen' }
    ]
  })
});

initSocket(server);

backend(express, app);

process.on('SIGINT', () => {
  log({
    lines: [
      {
        text: 'Finished Dashboard You Can Rerun It With npm start', color: 'green'
      }
    ],
    clear: true
  })
  process.exit();
});
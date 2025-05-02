import web from './Web.mjs';
import systeminfo from './SystemInfo.mjs';

export default function(express, app) {
  web(app);
  systeminfo(app);
}
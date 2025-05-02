import registerApis from './APIS/RegisterApis.mjs';
import path from 'path'; // Cambié esta línea para usar path
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(express, app) {
  // Usar path.join() correctamente
  app.use(express.static(path.join(__dirname, "../Front/")));
  
  // Registrar tus rutas de API
  registerApis(express, app);

  // Servir el archivo index.html para todas las rutas no API
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../Front/index.html"));
  });
}
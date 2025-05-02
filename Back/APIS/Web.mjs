import { join, dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default function(app) {
  app.get("/api/get/web", (req, res) => {
    const route = req.query.route;
    const htmlPath = join(__dirname, `./WEBS/HTML/${route}.html`);
    const cssPath = join(__dirname, `./WEBS/CSS/${route}.css`);
    const jsPath = join(__dirname, `./WEBS/JS/${route}.js`);
    
    if (fs.existsSync(htmlPath)) {
      const htmlContent = fs.readFileSync(htmlPath, "utf8");
      const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : '';
      const jsContent = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, "utf8") : '';
      
      return res.json({
        html: htmlContent,
        css: cssContent,
        js: jsContent
      });
    } else {
      const htmlContent = fs.readFileSync(join(__dirname, "./WEBS/HTML/404.html"), "utf8");
      const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(join(__dirname, "./WEBS/CSS/404.css"), "utf8") : '';
      const jsContent = fs.existsSync(jsPath) ? fs.readFileSync(join(__dirname, "./WEBS/JS/404.js"), "utf8") : '';
      return res.json({
        html: htmlContent,
        css: cssContent,
        js: jsContent
      });
    }
  });
}
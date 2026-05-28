import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8099;
const DIST = path.join(__dirname, "dist/public");

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".json": "application/json",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let filePath = path.join(DIST, url.pathname);

  const tryFile = (p) => {
    try {
      const stat = fs.statSync(p);
      if (stat.isDirectory()) return tryFile(path.join(p, "index.html"));
      const ext = path.extname(p).toLowerCase();
      const mime = MIME[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mime });
      fs.createReadStream(p).pipe(res);
      return true;
    } catch {
      return false;
    }
  };

  if (!tryFile(filePath)) {
    const index = path.join(DIST, "index.html");
    try {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(index).pipe(res);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Enkutatash Event serving on http://0.0.0.0:${PORT}`);
});

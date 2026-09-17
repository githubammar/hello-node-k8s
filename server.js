const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World! 🚀</h1>
        <p>Running with Node.js</p>
        <p>Containerized with Docker</p>
        <p>Managed by Kubernetes</p>
        <p>Developed by M Ammar Shaheen</p>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

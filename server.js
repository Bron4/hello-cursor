const express = require('express');
const app = express();

// Use a different port and allow override
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from Cursor!');
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Log startup errors (like port in use)
server.on('error', (err) => {
  console.error('Failed to start server:', err.message);
});
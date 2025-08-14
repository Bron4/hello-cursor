const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// Serve everything in /public at the root
app.use(express.static(path.join(__dirname, 'public')));

// Tiny JSON API
app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

// Safe fallback for any other route (no wildcard pattern parsing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Failed to start server:', err.message);
});
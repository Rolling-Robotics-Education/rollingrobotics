// app.js

const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = process.env.PORT || 8080;

app.set('trust proxy', true);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'app')));

// Handle all other routes by serving index.html (for single-page applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.get('/debug', (req, res) => {
  res.json({
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    secure: req.secure,
    host: req.hostname,
    forwardedFor: req.get('x-forwarded-for'),
    forwardedProto: req.get('x-forwarded-proto'),
    forwardedHost: req.get('x-forwarded-host')
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


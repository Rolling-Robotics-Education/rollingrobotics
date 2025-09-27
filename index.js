// app.js

const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'app')));

app.use((req, res, next) => {
  const host = req.headers.host?.split(':')[0];
  if (host && host.toLowerCase() === 'rollingrobotics.org') {
    return res.redirect(301, 'https://www.rollingrobotics.org' + req.originalUrl);
  }
  next();
});

// Handle all other routes by serving index.html (for single-page applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


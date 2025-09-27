// app.js

const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = process.env.PORT || 8080;

// 1) Azure is behind a proxy
app.set('trust proxy', true);

// 2) Redirect apex -> www (301)
app.use((req, res, next) => {
  // Debug logging to troubleshoot mobile redirect issues
  console.log('=== Redirect Debug Info ===');
  console.log('User-Agent:', req.headers['user-agent']);
  console.log('x-forwarded-host:', req.headers['x-forwarded-host']);
  console.log('host:', req.headers.host);
  console.log('x-forwarded-proto:', req.headers['x-forwarded-proto']);
  console.log('x-forwarded-for:', req.headers['x-forwarded-for']);
  console.log('Original URL:', req.originalUrl);
  
  // Try multiple header sources for hostname (mobile networks can be tricky)
  const possibleHosts = [
    req.headers['x-forwarded-host'],
    req.headers['x-original-host'],
    req.headers.host,
    req.hostname
  ].filter(Boolean);

  console.log('All possible hosts:', possibleHosts);

  const rawHost = possibleHosts[0]
    ? possibleHosts[0]
        .split(',')[0]        // if multiple values
        .split(':')[0]        // strip port
        .toLowerCase()
        .trim()
    : '';

  console.log('Processed rawHost:', rawHost);
  console.log('Should redirect?', rawHost === 'rollingrobotics.org');

  if (rawHost === 'rollingrobotics.org') {
    console.log('Redirecting to: https://www.rollingrobotics.org' + req.originalUrl);
    return res.redirect(301, 'https://www.rollingrobotics.org' + req.originalUrl);
  }
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'app')));

// Handle all other routes by serving index.html (for single-page applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


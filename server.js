// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Only start server if not in test environment
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Flipkart clone app listening at http://localhost:${port}`);
  });
}

module.exports = app;


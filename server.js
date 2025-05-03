// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Flipkart clone app listening at http://localhost:${port}`);
  });
}

module.exports = app; // <--- Export app for testing



const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

app.use('*', (req, res) => {
  res.status(404).send('Page not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost${PORT}...`)
});
module.exports = app;
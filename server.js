const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.json({"Message": "Hello"});
});

app.listen(PORT, HOST, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

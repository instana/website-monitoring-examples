const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  console.log('Received referer:', req.headers.referer);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Third-Party App listening at http://localhost:${port}`));

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.all('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tempsRouter = require('./routes/temps');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/temps', tempsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
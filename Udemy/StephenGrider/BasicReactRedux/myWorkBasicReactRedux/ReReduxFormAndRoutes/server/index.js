const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// set up express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');

const staticPath = path.resolve(__dirname, '../react-client/dist');
const indexHtmlPath = path.resolve(staticPath, 'index.html');

app.use(express.static(staticPath));
mongoose.Promise = global.Promise;

const routes = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

app.get('*', (req, res) => {
  // console.log('req: ', Object.keys(req));
  console.log('req: ');

  res.sendFile(indexHtmlPath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening to port#: ${PORT}`);
});

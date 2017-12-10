const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

const app = express();

const PORT = process.env.PORT || 3090;

// DB set up
mongoose.connect('mongodb://localhost/auth', { useMongoClient: true });
mongoose.Promise = global.Promise;

// app set up
app.use(morgan('combined')); // logger in server (mostly used for debugging)
app.use(bodyParser.json({ type: '*/*' }));

app.use(cors());

router(app);

// server set up
app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
})

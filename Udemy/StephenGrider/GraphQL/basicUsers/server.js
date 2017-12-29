const express = require('express');
const expressGraphQL= require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const PORT = 4000;

app.use('/graphiql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(PORT, (req, res) => {
  console.log(`App is listening to port: ${PORT}`);
})
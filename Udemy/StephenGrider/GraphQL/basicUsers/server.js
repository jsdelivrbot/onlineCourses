const express = require('express');
const expressGraphQL= require('express-graphql');

const app = express();

const PORT = 3000;

app.use('/graphiql', expressGraphQL({
  graphiql: true
}));

app.listen(PORT, (req, res) => {
  console.log(`App is listening to port: ${PORT}`);
})
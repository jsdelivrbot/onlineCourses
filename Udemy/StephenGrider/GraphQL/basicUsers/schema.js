const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQlString },
    firstName: { type: GraphQlString },
    age: { type: GraphQLInt }
  }
});

const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const users = [
  { id: 23, name: 'Moriah', age: 23 },
  { id: 57, name: 'Harvey', age: 57 },
  { id: 16, name: 'Lucile', age: 16 },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        // return _.find(users, { id: args.id});
        return axios.get(`http://localhost:3000/user/${args.id}`)
          .then((res) => {
            console.log('res.data: ', res.data);

            return res.data;
          })
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

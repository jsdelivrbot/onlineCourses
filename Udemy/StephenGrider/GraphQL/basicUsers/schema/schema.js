const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = graphql;

// const users = [
//   { id: 23, name: 'Moriah', age: 23 },
//   { id: 57, name: 'Harvey', age: 57 },
//   { id: 16, name: 'Lucile', age: 16 },
// ]

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        console.log('parentValue: ', parentValue);

      }
    }
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
            // console.log('res.data: ', res.data);

            return res.data;
          })
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

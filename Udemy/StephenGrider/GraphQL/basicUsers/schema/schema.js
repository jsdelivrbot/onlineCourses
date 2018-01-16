const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLList } = graphql;

// const users = [
//   { id: 23, name: 'Moriah', age: 23 },
//   { id: 57, name: 'Harvey', age: 57 },
//   { id: 16, name: 'Lucile', age: 16 },
// ]

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        console.log('parentValue: ', parentValue);
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`).then(res => {
          // return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(res => {
          
          console.log('res.data: ', res.data);
          return res.data;
        });
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        // console.log('parentValue: ', parentValue);
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(res => {
          // console.log('res.data', res.data);
          return res.data;
        });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        // return _.find(users, { id: args.id});
        return axios.get(`http://localhost:3000/user/${args.id}`).then(res => {
          // console.log('res.data: ', res.data);

          return res.data;
        });
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`).then(res => {
          return res.data;
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

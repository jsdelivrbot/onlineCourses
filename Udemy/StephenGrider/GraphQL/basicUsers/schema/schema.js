const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;

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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLInt },
      },
      resolve(parentValue, { name, age }) {
        console.log('{ name, age }: ', { name, age });
        return axios.post(`http://localhost:3000/users`, { name, age }).then(res => res.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/users/${id}`, { id }).then(res => res.data);
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
      },
      resolve(parentValue, { id, name, age }) {
        console.log('{ id, name }: ', { id, name, age });
        return axios.patch(`http://localhost:3000/users/${id}`, { name, age }).then(res => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

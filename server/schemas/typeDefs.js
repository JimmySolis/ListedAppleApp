const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    password: String
    lists: [List]!
}

type List {
    _id: ID
    listName: String
    listMaker: String
    createdAt: String
    gifts:[Gift]
}

type Gift {
    _id: ID
    giftName: String
    giftUrl: String
    giftMaker: String
    createdAt: String
  }

  type Info{
    _id: ID
    firstName: String
    lastName: String
    shirtSize: String
    shoeSize: String
    pantsSize: String
    favColor: String
    favNameToBeCalled: String
    favNFLTeam: String
    favCollegeTeam: String
    favSoccerTeam: String
    gender: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    lists(username: String): [List]
    list(listId: ID!): List
    me: User
    myInfo: Info
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addList(listName: String!): List
    addGift(listId: ID! giftName: String! giftUrl: String!): Gift
    addInfo(firstname: String! lastName: String! shirtSize: String! shoeSize: String! pantsSize: String! favColor: String! favNameToBeCalled: String! favNFLTeam: String! favCollegeTeam: String! favSoccerTeam: String! gender: String!): Info
    removeUser(username: String!, password: String!): Auth
    removeList(listId: ID!): List
    removeGift(giftId: ID! listId: ID!): Gift

  }
`;

module.exports = typeDefs

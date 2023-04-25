import { gql } from '@apollo/client';

export const MUTATION_LOGINUSER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      lists {
        _id
        listName
        listMaker
        createdAt
        gifts {
          _id
          giftName
          giftUrl
          giftMaker
          createdAt
        }
      }
    }
  }
}
`;

export const  MUTATION_SIGNUPUSER = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const  MUTATION_ADDLIST = gql`
mutation addList($listName: String!) {
  addList(listName: $listName) {
    listName
    listMaker
    createdAt
  }
}
`;

export const MUTATION_ADDGIFT = gql`
mutation addGift($listId: ID!, $giftName: String!, $giftUrl: String!) {
  addGift(listId: $listId, giftName: $giftName, giftUrl: $giftUrl) {
    giftName
    giftUrl
    giftMaker
    createdAt
    _id
  }
}
`

export const  MUTATION_DELETEUSER = gql`
mutation deleteUser($username: String!, $password: String!) {
    removeUser(email: $email, password: $password) {
      user {
        _id
        email
      }
    }
  }
`
export const  MUTATION_DELETELIST = gql`
mutation deleteList($listId: ID!) {
    removeList(listId: $listId) {
      listName
      _id
    }
  }
`
export const  MUTATION_DELETEGIFT = gql`
mutation deleteGift($giftId: ID!, $listId: ID!) {
  removeGift(giftId: $giftId, listId: $listId) {
    giftName
  }
}
`
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LogIn($password: String!, $email: String!) {
    login(email: $email, password: $password) {
      token
      message
      success
      user {
        email
        id
        firstName
        lastName
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation create_event(
    $file: Upload!
    $collectionId: ID!
    $details: String!
    $endDate: DateTime!
    $startDate: DateTime!
    $title: String!
    $venue: String!
    $location: String!
  ) {
    addEvents(
      collectionId: $collectionId
      details: $details
      endDate: $endDate
      startDate: $startDate
      images: $file
      title: $title
      venue: $venue
      location: $location
    ) {
      success
    }
  }
`;

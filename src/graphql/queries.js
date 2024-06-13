import { gql } from '@apollo/client';

export const ALL_RESPOSITORIES = gql`
  query {
  repositories {
    edges {
      node {
        id
        fullName
        description
        forksCount
        language
        name
        ownerAvatarUrl
        ownerName
        ratingAverage
        reviewCount
        stargazersCount
        url
      }
    }
  }
}
`;

export const LOGIN = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
import { gql } from "@apollo/client";

export const SearchQuery = gql`
  query SearchLogs($search: String!) {
    searchLogs(search: $search) {
      Message
      Source
      CustomerId
    }
  }
`;

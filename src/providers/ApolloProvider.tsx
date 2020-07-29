import * as React from "react";
import {
  ApolloClient,
  ApolloProvider as AProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

export const ApolloProvider: React.FC = ({ children }) => (
  <AProvider client={client}>{children}</AProvider>
);

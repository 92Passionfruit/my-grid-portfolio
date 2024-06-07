import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

try {
  console.log("GraphQL Endpoint:", process.env.REACT_APP_GRAPHQL_ENDPOINT);
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  console.log("Apollo Client:", client);

  const root = createRoot(document.getElementById("root")!);

  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
      </ApolloProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error("An error occurred:", error);
}

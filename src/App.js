import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookDetailsPage, HomePage, SearchPage } from "./pages";
import GlobalStyle from "./styles/globalStyles";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache } from "./components/cart/cache";

function App() {
  const client = new ApolloClient({
    uri: "https://quidax-feec-graphql.herokuapp.com/graphql",
    cache: cache,
  });
  return (
    <Router>
      <ApolloProvider client={client}>
        <GlobalStyle />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/book-details/:id" component={BookDetailsPage} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;

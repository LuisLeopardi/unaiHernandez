import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/list'
import {ApolloClient, gql, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckjt7cldydc2601wk8xj700ps/master",
  cache: new InMemoryCache()
})

const App = () =>  {
  return (
    <ApolloProvider client={client}>
      <List/>
    </ApolloProvider>
  );
}

export default App;

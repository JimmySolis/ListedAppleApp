import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigator from './routes/HomeStack';

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:3001/graphql',
});


const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('id_token');

  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


export default function App() {
  
  return (
    <ApolloProvider client={client}>
      <Navigator/>
    </ApolloProvider>
   
  );
}


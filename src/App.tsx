/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { UserCollectionContextProvider } from './UserCollectionContext';

import Header from './components/shared/header';
import Footer from './components/shared/footer';
import MobileNav from './components/shared/mobile-nav';
import Homepage from './pages/Homepage';
import CollectionList from './pages/CollectionList';
import CollectionDetails from './pages/CollectionDetails';
import AnimeDetails from './pages/AnimeDetails';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding-bottom: 56px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const AppContainer = styled.div`
  padding: 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
  height: 100%;
`;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = from([errorLink, new HttpLink({ uri: 'https://graphql.anilist.co/' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <UserCollectionContextProvider>
        <Layout>
          <AppContainer>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/collection-list">
                <Route index element={<CollectionList />} />
                <Route path=":collectionid" element={<CollectionDetails />} />
              </Route>
              <Route path="/anime/:animeid" element={<AnimeDetails />} />
            </Routes>
          </AppContainer>
          <Footer />
          <MobileNav />
        </Layout>
      </UserCollectionContextProvider>
    </ApolloProvider>
  );
};

export default App;

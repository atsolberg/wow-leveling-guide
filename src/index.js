import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Global } from '@emotion/react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Tools from './pages/tools/Tools';

import styles from './styles/global-styles';

// TODO use https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
// to get tt-link/quest data on hover

function App() {
  return (
    <div className="app">
      <Global styles={styles} />
      <Header />
      <Main>
        <Router>
          <Chapter1 path="/" />
          <Chapter1 path="/1" />
          <Chapter2 path="/2" />
          <Chapter3 path="/3" />
          <Tools path="/tools" />
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

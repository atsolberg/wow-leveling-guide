import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router } from '@reach/router';
import { Global } from '@emotion/core';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';

import styles from './styles/global-styles';

// TODO use https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
// to get item/quest data on hover

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
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

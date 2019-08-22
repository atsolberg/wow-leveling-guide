import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router } from '@reach/router';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './styles/global-styles';
import { Global } from '@emotion/core';
import Chapter1 from './pages/Chapter1';

function App() {
  return (
    <div className="app">
      <Global styles={styles} />
      <Header />
      <Main>
        <Router>
          <Chapter1 path="/" />
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

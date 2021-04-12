import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './commons/Header/Header';
import { Footer } from './commons/Footer/Footer';
import Router from './routes/route';
import store from './store/';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Header />
        < Router />
        </BrowserRouter>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

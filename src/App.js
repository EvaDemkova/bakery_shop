import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './components/style.css';

import Navigation from './components/navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Login from './pages/login';
import Register from './pages/register';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
      <main>
        <Navigation />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Router>
      </main>
    </AuthProvider>
  );
}

export default App;

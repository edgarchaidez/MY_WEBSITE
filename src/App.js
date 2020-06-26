import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import './App.css';
import Layout from './Containers/Layout/Layout';
import AboutScreen from './Containers/Screens/AboutScreen';
import PortfolioScreen from './Containers/Screens/PortfolioScreen';

function App() {

return (
    <Layout>
      <Route path="/" exact component={PortfolioScreen}/>
      <Route path="/about" component={AboutScreen}/>
      <Redirect to="/" />
    </Layout>
  );
}

export default App;

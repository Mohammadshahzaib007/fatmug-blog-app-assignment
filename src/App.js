import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import writeArticle from './pages/writeArticle';

function App () {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/write" component={writeArticle} />
     </Switch>
   </Layout>
  );
}

export default App;

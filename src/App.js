import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import ArticleView from './pages/ArticleView';
import Home from './pages/Home';
import MyArticle from './pages/MyArticle';
import writeArticle from './pages/writeArticle';

function App () {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/write" component={writeArticle} />
       <Route exact path="/article-view" component={ArticleView} />
       <Route exact path="/your-articles" component={MyArticle} />
     </Switch>
   </Layout>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import Posts from './containers/Posts.jsx';
import Post from './containers/Post.jsx';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="post" component={Posts} >
        <Route path=":id" component={Post} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root'),
);

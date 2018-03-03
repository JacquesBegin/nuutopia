import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TaskBoard from './components/TaskBoard.js';
import PostJob from './components/PostJob.js';
// import Details from './components/Details.js';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/taskboard" component={TaskBoard} />
      <Route path="/postjob" component={PostJob} />
      {/* <Route path="/details" component={Details} /> */}
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();

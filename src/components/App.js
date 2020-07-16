import React from 'react';
import './App.css';
import Restaurant from './Restaurant';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/Qfood/:rest_name" component={Restaurant} />
    </Router>
  );
}

export default App;

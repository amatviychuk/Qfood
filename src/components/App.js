import React from 'react';
import './App.css';
import Restaurant from './Restaurant';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="" component={Restaurant} />
    </Router>
  );
}

export default App;

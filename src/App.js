import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
      </header>
    </div>
  );
}



export default App;

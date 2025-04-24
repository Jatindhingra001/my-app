import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlantsPage from './components/PlantsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plants" element={<PlantsPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;

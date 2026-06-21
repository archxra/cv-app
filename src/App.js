import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inner" element={<Inner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

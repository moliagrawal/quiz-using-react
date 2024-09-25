import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import './App.css';
import { useState } from 'react';

function App() {
  const [isDarkMode, toggleDarkMode] = useState(false);

  return (
    <Router>
      <div className="App">
        <button className="theme-toggle" onClick={() => toggleDarkMode(!isDarkMode)}>
          Switch Mode
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
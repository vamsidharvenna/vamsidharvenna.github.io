import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Certifications from './components/pages/Certifications';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App ()
{
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

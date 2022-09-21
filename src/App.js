import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Experience from './pages/Experience';
// import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjDisp from './pages/ProjDisp';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/portfolioweb" element={<Home />} />
          <Route path="/projects/:id" element={<ProjDisp />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

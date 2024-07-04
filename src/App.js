import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ProjDisp from './pages/ProjDisp';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/portfolioweb" element={<Home />} />
          <Route path="/projects" element={<ProjDisp />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

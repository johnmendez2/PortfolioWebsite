import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import Landing from './pages/landingpage';
import Contact from './pages/contactinfo';
import Projects from './pages/projects';

function App() {
  return (
    <div>
      <Routes>
        <Route>
        <Route path ="/" element={<Landing />}></Route>
        <Route path ="/contact" element={<Contact />}></Route>
        <Route path ="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './pages/landingpage';
import Contact from './pages/contactinfo';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <div>
      <Routes>
        <Route>
        <Route path ="/" element={<Landing />}></Route>
        <Route path ="/contact" element={<Contact />}></Route>
        <Route path ="/projects" element={<Projects />}></Route>
        <Route path ="/skills" element={<Skills />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

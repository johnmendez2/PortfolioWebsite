import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import Landing from './pages/landingpage';
function App() {
  return (
    <div>
      <Routes>
        <Route>
        <Route path ="/" element={<Landing />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

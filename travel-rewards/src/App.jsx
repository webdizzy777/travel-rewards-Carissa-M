import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';

function App() {

  return (
    <>
      {/* Route the user to the relevant components when the URL parameter is recognized */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

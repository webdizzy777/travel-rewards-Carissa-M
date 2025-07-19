import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import AddCardForm from './components/AddCardForm.jsx';
import PointsTable from './components/PointsTable.jsx';
import { useState } from 'react';

const initialCards = [
    {
        id: 1,
        cardName: "Sam's Club",
        gas: 5,
        restaurant: 3,
        supermarket: 1,
        discount: 1,
        wholesale: 5,
        onlineShopping: 1,
        utilities: 1,
        internet: 1,
        phone: 1,
        travel: 1,
        other: 1,
        expiringRewards: "",
        expiringDate: ""
    },
    {
        id:2,
        cardName: "Chase IHG",
        gas: 5,
        restaurant: 5,
        supermarket: 3,
        discount: 3,
        wholesale: 3,
        onlineShopping: 3,
        utilities: 3,
        internet: 3,
        phone: 3,
        travel: 5,
        other: 3,
        expiringRewards: "40,000 Point Night Award",
        expiringDate: "11/01/2025"
    }
];

function App() {

  const [cards, setCards] = useState(initialCards);

  return (
    <>
      {/* Route the user to the relevant components when the URL parameter is recognized */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard cards={cards}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/AddCardForm' element={<AddCardForm cards={cards} setCards={setCards} />} />
          <Route path='/PointsTable' element={<PointsTable cards={cards}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

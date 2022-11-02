import './App.css';
import Header from './Header';
import TinderCard from './TinderCard';
import SwipeButtons from "./SwipeButtons"
import { useEffect } from 'react';
import { fetchAdd } from './redux/addSlice';
import { useDispatch } from 'react-redux';
function App() {
  
  return (
    <div className="App">
    <Header />
    <TinderCard/>
    <SwipeButtons/>
    </div>
  );
}

export default App;

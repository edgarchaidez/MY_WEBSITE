import React, {useState} from 'react';
import './App.css';
import AboutScreen from './Screens/AboutScreen';
import PortfolioScreen from './Screens/PortfolioScreen';
import Header from './Components/Header';
import Nav from './Components/Nav';

function App() {

  let content = <AboutScreen />;
  let clicked = false;
  const[currentState, setCurrentState]= useState(content);

  const clickHandler = () => {
    if(content = <AboutScreen />) {
      content = <PortfolioScreen />;
      setCurrentState(content);
    }
  }

  return (
    <div className="App">
      <Header />
      <Nav click={clickHandler}/>  
      <h1 className="name"> Edgar Chaidez </h1>
      {currentState}
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import FirstPage from './Components/FirstPage/FirstPage';

function App() {
  const [showFirstPage, setShowFirstPage] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);

  const handleStart = () => {
    setShowFirstPage(true);
    setShowMainPage(false)
  };

  return (
   <>{showMainPage &&<div className="App">
   <header className="App-header">
     <p>
     <h1>Hello Khushboo Ji!</h1>
     <button className='button' onClick={handleStart}>Start</button>
   </p>
   </header>
 </div>}
 {showFirstPage && <FirstPage/>}
</>
  );
}

export default App;

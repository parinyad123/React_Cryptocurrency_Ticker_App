import React from 'react';
import './App.css';
import Tickers from './Tickers'

function App() {
  return (
    <div className="App">
     <div className="App-header">
       <h2>Cryptocurrency Ticker</h2>
       <div>
         <Tickers />
       </div>
     </div>
    </div>
  );
}

export default App;

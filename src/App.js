import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }

    var numberarray = []
    for (var i = 0, l = 10; i < l; i++) {
        numberarray.push(Math.floor(Math.random() * 2))
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>
              See and say
            </h1>
          </header>
          <div className="content">
            <div className="row">

              {numberarray.map(number =>
                               <div className="dot-container">
                                 <div className={"dot active-" + number}></div>
                               </div>
                              )}
            </div>
            <button type="submit" onClick={() => { refreshPage() }}>Click</button>
          </div>
        </div>
    );
}

export default App;

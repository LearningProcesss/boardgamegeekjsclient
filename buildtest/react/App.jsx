import React, { useEffect } from 'react';
import { BggClient } from 'boardgamegeekclient'
import logo from './logo.svg';
import './App.css';

function App() {

    useEffect(() => {

        const client = BggClient.Create();
        
        client.thing.query({ id: 331787 }).then(result => {
            console.log(result)
            document.title = `Bgg Api result - BggThing ${result[0].name}`;
        })
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;


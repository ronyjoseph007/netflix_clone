import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { orginals, actions, romance, horror } from './urls';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Rowpost url={orginals} title="Netflix Orginals" />
            <Rowpost url={actions} title="Action Movies" isSmall />
            <Rowpost url={romance} title="Romance Movies" isSmall />
            <Rowpost url={horror} title="Horror Movies" isSmall />
        </div>
    );
}

export default App;

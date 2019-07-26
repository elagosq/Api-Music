import React from 'react';
import Header from './header';
import Nav from './nav';
import Main from '../hooks/fetchArtist';
import './styles.css';

const App = () => (
    <div className="container">
        <Header />
        <Nav />
        <Main />
    </div>
);

export default App;


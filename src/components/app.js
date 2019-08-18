import React from 'react';
import Header from './header';
import Navigation from './Navigation';
import ListItem from './ListItem';
import Nav from './Nav';

import './styles.css';

const App = () => {
    const { item, selectedItem } = Nav();
    return (
        <div className="container">
            <Header />
            <Navigation selectedItem={selectedItem} />
            <ListItem item={item} />
        </div>
    );
}
export default App;


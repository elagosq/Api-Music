import React from 'react';
import './styles.css';

const Nav = () => {
    const categorie = ["Country", "Singer/Songwriter", "R&B/Soul", "Pop", "Soundtrack", "Christian & Gospel", "K-Pop", "Alternative", "Rock", "Children's Music", "Dance", "Gospel", "Jazz", "Hip-Hop/Rap"]
    return (
        <nav className="menu">
            <ul>
                <li className="navTitle">Categoría</li>
                {categorie.map((item, i) => {
                    return <li key={i}><a href="#" onClick={() => console.log(item)}>{item}</a></li>
                })}
            </ul>
        </nav>
    )
};


export default Nav;
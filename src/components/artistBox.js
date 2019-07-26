import React from 'react';
import './styles.css';

const ArtistBox = ({ image, link, nombArtist, category }) => (
  <article className="columnBox">
    <img
      src={image}
      alt={link}
      className="imagenArtist"
    />
    <div className="textBox">
      <h3 className="artist">{nombArtist.slice(0, 15)}</h3>
      <p className="category">{category}</p>
    </div>
  </article>

)

export default ArtistBox; 
import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.image_url} width='30px' />
      <span>{pokemon.name}</span>
    </Link>
  </li>
)

export default PokemonIndexItem

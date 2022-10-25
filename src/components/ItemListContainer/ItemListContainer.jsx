import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
  return (
    <div className='cuerpo'>
      <h1>{greeting}</h1>
    </div>
  )
}

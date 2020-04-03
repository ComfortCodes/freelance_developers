import React from 'react';
import './card.styles.css';

export const Card = (props)=>(
    <div className='card-container'>
        <img alt='developers' src= {`https://avatars.dicebear.com/v2/avataaars/${props.developer.name}:seed.svg`}></img>
        <h1>{props.developer.name}</h1>
        <p>{props.developer.email}</p>
    </div>
)

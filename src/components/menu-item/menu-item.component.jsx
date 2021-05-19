import React from 'react';
import './menu-item.styles.css'

//functional component

//react also gives the html components style property and
// it takes objects that takes values equal to css values
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`} >
    <div style={{
        backgroundImage: `url(${imageUrl})`    
    }} 
    className='background-image' />
    <div className="content">
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">SHOP NOW</span>
    </div>
    </div>
);

export default MenuItem;
import React from 'react';
import './menu-item.styles.css'

// higher order component
import { withRouter } from 'react-router-dom';

//functional component

//react also gives the html components style property and
// it takes objects that takes values equal to css values

// now we have access to history becauyse of withRouter superpowering MenuItem component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

//it will return us superpowered MenuItem component
export default withRouter(MenuItem);
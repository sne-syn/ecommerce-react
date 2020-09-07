import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, image, size }) => {
  const imageSize = size === 'large' ? `menu__item--${size}` : ``;
  return (
    <li className={`menu__item ${imageSize}`}>
      <div className='menu__item-background-image' style={{ backgroundImage: `url(${image})` }} ></div>
      <div className='menu__item-content'>
        <h1 className='menu__item-title'>{title}</h1>
        <span className='menu__item-subtitle'>Shop now</span>
      </div>
    </li>
  )
}

export default MenuItem;

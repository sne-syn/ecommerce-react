import React from 'react';
import './homepage.styles.scss'

export const HomePage = () => (
  <section className='homepage'>
    <ul className='menu'>
      <li className='menu__item'>
        <div className='menu__item-content'>
          <h1 className='menu__item-title'>Hats</h1>
          <span className='menu__item-subtitle'>Shop now</span>
        </div>
      </li>
      <li className='menu__item'>
        <div className='menu__item-content'>
          <h1 className='menu__item-title'>Jackets</h1>
          <span className='menu__item-subtitle'>Shop now</span>
        </div>
      </li>
      <li className='menu__item'>
        <div className='menu__item-content'>
          <h1 className='menu__item-title'>Sneakers</h1>
          <span className='menu__item-subtitle'>Shop now</span>
        </div>
      </li>
      <li className='menu__item'>
        <div className='menu__item-content'>
          <h1 className='menu__item-title'>Womens</h1>
          <span className='menu__item-subtitle'>Shop now</span>
        </div>
      </li>
      <li className='menu__item'>
        <div className='menu__item-content'>
          <h1 className='menu__item-title'>Mans</h1>
          <span className='menu__item-subtitle'>Shop now</span>
        </div>
      </li>
    </ul>
  </section>
)


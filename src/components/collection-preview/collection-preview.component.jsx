import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='preview'>
      <h1 className='preview__title'>{title.toUpperCase()}</h1>
      <div className='preview__item'>
        {
          items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => {
            return (
              <CollectionItem key={id} {...itemProps} />
            )
          })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;

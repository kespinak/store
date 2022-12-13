import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic Tshirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Skirt',
      isNew: false,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Short Sleeve Graphic Tshirt',
      isNew: false,
      oldPrice: 19,
      newPrice: 15,
    },
  ];

  return (
    <div className='featuredProducts'>

      <div className="top">
        <h1>
          {type} Products
        </h1>

        <p>description of featured &/or trending</p>
      </div>

      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} /> 
        ))}
      </div>

    </div>
  )
}

export default FeaturedProducts
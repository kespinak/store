import React from 'react'
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
      <div className='card'>
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} 
            // src={toString(process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url)}  // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
            // src='http://localhost:1337/uploads/brownpants3_a761b2aa4b.png' // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
            alt="" 
            className="mainImg" 
          />
        
          <img 
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}
            // src={'http://localhost:1337/uploads/brownpants1_eed69bec4d.png'} // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
            alt="" 
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          {/* sales tactic to make is seem like customer is getting a deal 20$ off */}
          <h3>${item.oldPrice || item?.attributes.newPrice + 20}</h3>
          <h3>${item?.attributes.newPrice}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
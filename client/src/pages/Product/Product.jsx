import React, { useState } from 'react'
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [
    'https://images.pexels.com/photos/9978454/pexels-photo-9978454.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/8210519/pexels-photo-8210519.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className='product'>
      <div className="left">

        <div className="images">
          <img src={images[0]} alt="" onClick={(event) => (setSelectedImg(0))} />
          <img src={images[1]} alt="" onClick={(event) => (setSelectedImg(1))}  />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>

      </div>

      <div className="right">

        <h1>Title</h1>

        <span className='price' >$20</span>

        <p>
          description of the product that the customer wants to buy and add to their cart...
        </p>

        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev === 0 ? 0 : prev - 1)} > - </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)} > + </button>
        </div>

        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>

        <div className="links" >

          <div className='item' >
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>

          <div className='item' >
            <BalanceIcon /> ADD TO COMPARE
          </div>

        </div>

        <div className="info">
          <span> Vender: Polo</span>
          <span> Product Type: Tshirt </span>
          <span> Tag: Tshirt, Women, Top </span>
        </div>

        <hr />

        <div className="info">
          <span> DESCRIPTION </span>
          <hr />
          <span> ADDITIONAL INFORMATION</span>
          <hr />
          <span> FAQ </span>
        </div>

      </div>

    </div>
  )
}

export default Product
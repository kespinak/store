import React from 'react'
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: '',
      title: 'Long Sleeve Graphic Tshirt',
      description: 'Long Sleeve Graphic Tshirt',
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      description: 'a very nice coat',
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id} >

          <img src={item.img} alt='' />

          <div className="details">
            <h1>{item.title}</h1>
            <p> {item.description.substring(0, 100)} </p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$TOTAL PRICE</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
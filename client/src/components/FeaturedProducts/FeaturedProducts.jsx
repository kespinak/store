import React, { useState, useEffect } from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import axios from 'axios';

const FeaturedProducts = ({type}) => {

  /* const data = [
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
  ]; */

  const [data, setData] = useState([]);

  /* * NOTE THAT WE CAN USE REACT QUERY OR SOME OTHER LIBRARY...BUT SINCE WE ARE ONLY FETCHING DATA AND WE ARE NOT GOING TO USE 
  ANY POST METHODS...WE WILL KEEP IT SIMPLE AND JUST USE USEEFFECT HOOT TO FETCH DATA FROM THE BACKEND */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + '/products?populate=*', // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(response.data.data);
        // console.log(data, 'data1');
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data, 'data2'); // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
  console.log(JSON.stringify(process.env.REACT_APP_UPLOAD_URL)); // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP
  // console.log(process.env.REACT_APP_UPLOAD_URL.toString()); // * NEED TO FIX THE FEATURED & TREDING PHOTOS NOT SHOWING UP

  return (
    <div className='featuredProducts'>

      <div className="top">
        <h1>
          {type} Products
        </h1>

        <p>description of featured &/or trending</p>
      </div>

      {/* sending to card component */}
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} /> 
        ))}
      </div>

    </div>
  )
}

export default FeaturedProducts;
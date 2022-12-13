import React, { useState } from 'react'
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  // const param = useParams();
  // console.log(param);
  const categoryid = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      
      <div className="left">

        <div className="filterItem">

          <h2>Product Categories</h2>

          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirts </label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>

        </div>

        <div className="filterItem">

          <h2>Filter by price</h2>

          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(event) => setMaxPrice(event.target.value)} />
            <span>{maxPrice}</span>
          </div>

        </div>

        <div className="filterItem">
          
          <h2>Sort By</h2>

          <div className="inputItem">
            <input type="radio" id='ascending' value='ascending' name='price' onChange={(event) => setSort('ascending')} />
            <label htmlFor="ascending">Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio" id='descending' value='descending' name='price' onChange={(event) => setSort('descending')} />
            <label htmlFor="descending">Price (Highest first)</label>
          </div>

        </div>

      </div>

      <div className="right">
        
        <img
          className="categoryImg" 
          src="https://images.pexels.com/photos/1776268/pexels-photo-1776268.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="" 
        />

        <List categoryid={categoryid} maxPrice={maxPrice} sort={sort} /> 

      </div>

    </div>
  )
}

export default Products
// * NOT LOADING IMAGE AT THE TOP LEFT ENGLISH FLAG

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import en from '../../assets/en.png';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper' >

        <div className='left'>
          <div className='item' >
            {/* import en.png from assets folder */}
            {/* * NOT WORKING */}
            <img src={en} alt='english' />
            <KeyboardArrowDownOutlinedIcon />
          </div>

          <div className='item' >
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>

          <div className='item' >
            <Link to='/products/1'>Tutorials</Link>
          </div>

          <div className='item' >
            <Link to='/products/2'>Tutoring</Link>
          </div>

          <div className='item' >
            <Link to='/products/3'>Services</Link>
          </div>

        </div>

        <div className='center'>

          <div className='center' >
            <Link to='/products/3'>Kevin's Store</Link>
          </div>

        </div>

        <div className='right'>

          <div className='item' >
            <Link to='/products/3'>Homepage</Link>
          </div>

          <div className='item' >
            <Link to='/products/3'>About</Link>
          </div>

          <div className='item' >
            <Link to='/products/3'>Contact</Link>
          </div>

          <div className='icon' >
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar;
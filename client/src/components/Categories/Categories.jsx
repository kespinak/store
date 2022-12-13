import React from 'react'
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/2406382/pexels-photo-2406382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className='link' to='/product/1'> Sale </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/9959962/pexels-photo-9959962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className='link' to='/product/1'> Sale </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/6979940/pexels-photo-6979940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className='link' to='/product/1'> Sale </Link>
          </button>
          </div>
      </div>
      
      <div className="col col1" >

        <div className="row">

          <div className="col"> 
            <div className="row">          
              <img src="https://images.pexels.com/photos/4671552/pexels-photo-4671552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <button>
                <Link className='link' to='/product/1'> Sale </Link>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/8000820/pexels-photo-8000820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <button>
                <Link className='link' to='/product/1'> Sale </Link>
              </button>
            </div>
          </div>

        </div>

        <div className="row">
          <img src="https://images.pexels.com/photos/2187963/pexels-photo-2187963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className='link' to='/product/1'> Sale </Link>
          </button>
        </div>

      </div>      

    </div>
  )
}

export default Categories;
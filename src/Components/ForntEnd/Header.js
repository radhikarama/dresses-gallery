import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import CartItems from './CartComponent/CartItems'

const Header = ({cartitems}) => {
  return (
    <header className='header'>
        <div >
            <h1>
        <Link to='/' className='logo'>Dresses - Gallery</Link>
        </h1> </div>
        <div className='list_items'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/signup'>SignUp</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/cart'>
                    <i className='fa fa-shopping-cart'></i>
                    <span>
                        {cartitems.length===0?'':cartitems.length}
                    </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
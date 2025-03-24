import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom";
import { useGlobalContext } from '../Cart/ContextAndReducer/cartContext';
// import { FaShoppingBag, FaHome, FaTasks } from "react-icons/fa";
// import {useSelector} from "react-redux"
// import "./cart.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"

function Nav({ handleInputChange }) {
  const { amount, items } = useGlobalContext();
  const navigate = useNavigate()
  return (
    <nav>
      <div className="nav-container">
        <input onChange={handleInputChange} className="search-input" type="text" placeholder='search for an item' />
      </div>
      <div className="profile-container">
        <Link to="/register">
          <AiOutlineUser className='nav-icons' />
        </Link>

        <span onClick={() => navigate(`/cart`)}>

          <AiOutlineShoppingCart className='nav-icons'></AiOutlineShoppingCart>
          {amount}
        </span>
      </div>






    </nav>
  )
}

export default Nav
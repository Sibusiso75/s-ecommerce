import React from 'react'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { useGlobalContext } from '../Cart/ContextAndReducer/cartContext';
import { useNavigate } from 'react-router-dom';

function Card({id,image, title, star, price}) {
    const {  addToCart} =
  useGlobalContext();
  let navigate = useNavigate()
  return (
       <div className="card" onClick={()=>navigate(`/item/${id}`)}>
                  <img className="card-image" src={image} alt={title} />
                  <div className="card-details">
                      <h3 className="card-title">{title}</h3>
                      <div className="card-reviews">
                      {star} 
                    
                      </div>
                      <div className="card-price">
                     <div className="price">
                     ${price}
                     </div>
                     <button onClick={()=>addToCart(id)}   style={{color:"gray",padding:"3px",border:"1px solid gray",borderRadius:"5px",background:"transparent"}}>

         Add to cart 
        </button>
                      </div>
                  </div>
              </div>
  )
}

export default Card
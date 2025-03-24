import React from 'react'
import Buttons from "../components/Buttons"
import "./Recommended.css"

function Recommended({handleClick}) {
  return (
    <>
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
           <Buttons onClickHandler={handleClick} value="" title="All Products"/>
           <Buttons onClickHandler={handleClick} value="HP" title="HP"/>
           <Buttons onClickHandler={handleClick} value="Samsung" title="Samsung"/>
           <Buttons onClickHandler={handleClick} value="Popular" title="Popular"/>

        </div>
    </div>
    </>
  )
}

export default Recommended
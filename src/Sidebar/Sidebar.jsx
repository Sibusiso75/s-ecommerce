import React from 'react'
import "./Sidebar.css"
import { MdShoppingCart } from 'react-icons/md'
import Category from './Category/Category'
import Price from './Price/Price'
import Colours from './Colours/Colours'

function Sidebar({handleChange}) {
  return (
    <>
    <section className="sidebar">
        {/* <div className="logo-container">
            <h1><MdShoppingCart/></h1>
        </div> */}
        <br />
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colours handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar
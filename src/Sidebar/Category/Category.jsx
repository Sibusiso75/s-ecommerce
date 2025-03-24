import React from 'react'
import "./Category.css"
import Input from '../../components/Input'

function Category({handleChange}) {
  return (
    <section  className='ml'>
        <h2 className="sidebar-title">Category</h2>
        <label className="sidebar-label-container">
               <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span> All
        </label>
      
      
       
       <Input
        handleChange={handleChange}
        value="men's clothing"
        title="men's clothing"
        name="test"
      />
       <Input
        handleChange={handleChange}
        value="women's clothing"
        title="women's clothing"
        name="test"
      />
       <Input
        handleChange={handleChange}
        value="jewelery"
        title="jewelery"
        name="test"
      />
       <Input
        handleChange={handleChange}
        value="electronics"
        title="electronics"
        name="test"
      />
      
        </section>
  )
}

export default Category
import React from 'react'
import "./Colours.css"
import Input from '../../components/Input'

function Colours({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-label-container colour-title">Colours</h2>
      {/* <h2 className="sidebar-title">Colours</h2> */}
        <label className="sidebar-label-container">
               <input onChange={handleChange} type="radio" value="" name="test1" />
            <span className="checkmark all"></span> All
        </label>
      
        <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        colour="black"
      />
 <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        colour="blue"
      />
       <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        colour="red"
      />
       <Input
        handleChange={handleChange}
        value="brown"
        title="Brown"
        name="test1"
        colour="brown"
      />
       <label className="sidebar-label-container">
               <input onChange={handleChange} type="radio" value="white" name="test1" />
            <span className="checkmark" style={{background:"white",color:"black", border:"1px solid black"}}></span> White
        </label>
        {/* <Input
        handleChange={handleChange}
        value="silver"
        title="Silver"
        name="test1"
        colour="silver"
      /> */}
       {/* <Input
        handleChange={handleChange}
        value="purple"
        title="Purple"
        name="test1"
        colour="purple"
      /> */}
    </div>
  )
}

export default Colours
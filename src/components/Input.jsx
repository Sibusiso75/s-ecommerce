import React from 'react'

function Input({handleChange, value, title, name, colour, starNumber}) {
  return (
    <div>
       <label className="sidebar-label-container">
               <input onChange={handleChange} type="radio"  starNumber={starNumber} value={value} name={name} />
            <span className="checkmark" style={{background:colour}}></span> {title}
        </label>
        
    </div>
  )
}

export default Input
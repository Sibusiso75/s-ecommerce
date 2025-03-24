import React, {useState} from 'react'
import Nav from '../Nav/Nav'
import Products from '../Products/Products'
import Sidebar from '../Sidebar/Sidebar'
import products from '../db/data'
import Card from './Card'
import Recommended from '../Recommended/Recommended'

function Home() {
  
 const [selectedCategory, setSelectedCategory] =useState(null)
 const [query, setQuery] = useState("")
const [showSideBar, setShowSideBar] = useState(false)

 function handleInputChange(e){
  
  setQuery(e.target.value)
 }

//input filter
const filteredItems = products.filter(product =>product.title.toLowerCase().includes(query.toLowerCase()))


//radio filter
function handleChange(e){
  setSelectedCategory(e.target.value)
  console.log(e.target.value)
 }

 //buttons filter
 function handleClick(e){
  setSelectedCategory(e.target.value)
 }

 function filteredData(products, selected, query){
   let filteredProducts = products

   //filter input ctegory
  
   if(query){
    filteredProducts = filteredItems
   }

   //Selected filter
   if(selected){
    filteredProducts = filteredProducts.filter((p)=>{
      return p.category===selected || p.colour===selected || p.company===selected|| p.price===selected || p.title===selected
    })
   }
   return filteredProducts.map(({id,image, title, star, price})=>(
    <Card
    key={Math.random()}
    image={image}
    title={title}
    star={star}
    price={price}
    id={id}

 
    />
   ))

 }

 const result = filteredData(products,selectedCategory,query)

  return (
    <div>
      <Nav query={query} handleInputChange={handleInputChange}/>
       <Sidebar handleChange={handleChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  )
}

export default Home
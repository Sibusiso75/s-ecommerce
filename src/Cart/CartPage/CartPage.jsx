import React from "react";
import { useGlobalContext } from "../ContextAndReducer/cartContext";
import {  useNavigate } from "react-router-dom";
import {FaPlusCircle, FaMinusCircle, FaTrashAlt} from "react-icons/fa"

function CartPage() {
  const {  items, total, increase, decrease,remove} =
    useGlobalContext(); 
    let navigate = useNavigate()
  if (items.length === 0) {
    return (
      <div className="emptyBag">
        <h3>Your bag is currently empty</h3>
      
      </div>
    );
  }
 
  

  return (
    <div>
      <h3 className="bag">Your bag</h3>
      <br />
      <button onClick={()=>navigate("/")}
      style={{ positon:"fixed",margin:"10px",background:"green", color:"white", padding:"5px"}}
      >
        Back Home
      </button>
      
      <br />
      
           <main style={{position:"fixed",border:"1px solid black",padding:"10px",right:"5px"}}>

      <span className="total">Total Price - ${total}</span>
      <button  onClick={()=>navigate("/order")} style={{marginLeft:"2%",color:"white",padding:"10px", borderRadius:"10px",width:"fit-content",background:"black"}}>
        Proceed to checkout
      </button>


     
    </main>
     
      <div >
        {items.filter((item)=>{
          return item.itemAdded===true
        })
     .map((item) => {
            return <div key={item.id} className="cartContainer">
              <div>
                <div className="cart">

        <img
    
    src={item.image}
      alt={item.title}
      style={{ width: "150px", height: "150px" }}
      />

        <div className="itemsAndButtons">
          <main> {item.title}</main>
          <main>{item.details}</main>
          <main>Price - ${item.price}</main>
        </div>
      </div>
    
      <br />

      <div style={{display:"flex", gap:"1rem",padding:"5px",borderRadius:"50px",width:"fit-content",color:"black"}}>

        <button disabled={item.amount>=10} onClick={() => increase(item.id)} style={{ border:"none",color: "black" }}>
          <FaPlusCircle/>
        </button>
       {item.amount}

       

        <button disabled={item.amount<=1} onClick={() => decrease(item.id)}style={{ border:"none",color: "black" }}>
        <FaMinusCircle/>
        </button>
        <button onClick={() => remove(item.id)}style={{ border:"none",color: "black" }}
        >
          <FaTrashAlt/>
        </button>
          </div>
      </div>
      
            </div>
          })}
         
      </div>
          <br />
      <hr />

     
    </div>
  );
}

export default CartPage;
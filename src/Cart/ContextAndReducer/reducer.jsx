
function reducer(state, action) {
   
    if(action.type==="ADD_TO_CART"){
      let tempitems = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, itemAdded:!item.itemAdded}}
        return item;
      });
      return { ...state, items: tempitems };
    }
    
    if (action.type === "TOTALS") {
      let { amount, total } = state.items.reduce((cartTotal, cartItem) => { 
          if(cartItem.itemAdded!==false){
            cartTotal.amount = cartTotal.amount + cartItem.amount;
            const itemPrice = cartItem.price*cartItem.amount;
            cartTotal.total = cartTotal.total + itemPrice}
          return cartTotal;},
          { total: 0, amount: 0 });
      total = parseFloat(total.toFixed(5)); 
      return { ...state, total, amount };}

    // if (action.type === "DISPAY_ITEMS") {
    //   return { ...state, items: action.payload, loading: false};
    // }


      if (action.type === "REMOVE") {
      let tempitems = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, itemAdded:false};
        }
        return item;
      });
      return { ...state, items: tempitems };  
      
    }
  
    if (action.type === "INCREASE") { 
      let tempitems = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, items: tempitems };
    }

    
    if (action.type === "DECREASE") {
      let tempitems = state.items.map((item) => {
          if (item.id === action.payload) {
            return {...item, amount: item.amount - 1};}
          return item;})
      return { ...state, items: tempitems };}
 
    return state;
  }
  export default reducer;
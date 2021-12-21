export const SetUser = (user) => ({
    type: "SET_USER",
    user: user
  });
  
  export const SetCart = (item)=>({
    type:"SET_CART",
    item:item
  })
  
  export const RemoveItem = (id)=>({
    type:"REMOVE_ITEM",
    id:id
  });
  
  export const Increment = (id)=>({
    type:"INCREMENT",
    id:id
  })
  
  export const Decrement = (id)=>({
    type:"DECREMENT",
    id:id
  })
  
  export const SetAuthPop = (auth)=>({
    type:"SET_AUTH_POP",
    auth:auth
  })
  
  export const SetOrders = (orders)=>({
    type:"SET_ORDERS",
    orders:orders
  })
  
  export const AddFavourite = (favourite)=>({
    type:"ADD_FAVOURITE",
    favourite:favourite
  })
  
  export const RemoveFavourite = (id)=>({
    type:"REMOVE_FAVOURITE",
    id:id
  })
  
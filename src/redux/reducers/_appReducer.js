const intialState = {
    user: false,
    /**Intially cart is empty */
    cart: [],
    auth_popup:false,
    orders:[],
    favourites:[]
  };
  
  const AppReducer = (state = intialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user
        };
  
        case "ADD_FAVOURITE":
          return{
            ...state,
            favourites: [...state.favourites,action.favourite]
          }
  
  
          case "REMOVE_FAVOURITE":{
            const index = state.favourites.findIndex(
              (favouriteItem) => favouriteItem.item.id === action.id
            );
    
            console.log(index);
    
            let newFavourite = [...state.favourites];
    
            if(index>=0){
              newFavourite.splice(index, 1);
            }
    
            return {
              ...state,
              favourites: newFavourite
            }
          }
  
        case "REMOVE_ITEM":{
          const index = state.cart.findIndex(
            (basketItem) => basketItem.product.id === action.id
          );
  
          console.log(index);
  
          let newBasket = [...state.cart];
  
          if(index>=0){
            newBasket.splice(index, 1);
          }
  
          return {
            ...state,
            cart: newBasket
          }
        }
  
        case "INCREMENT":{
          const index = state.cart.findIndex(
            (basketItem) => basketItem.product.id === action.id
          );
  
          state.cart[index].qty += 1;
          return {
            ...state,
            cart: [...state.cart]
          }
        }
  
  
        case "DECREMENT":{
          const index = state.cart.findIndex(
            (basketItem) => basketItem.product.id === action.id
          );
  
          state.cart[index].qty -= 1;
          return {
            ...state,
            cart: [...state.cart]
          }
        }
  
        case "SET_ORDERS":
        return {
          ...state,
          orders: action.orders
        };
  
        case "SET_AUTH_POP":
        return {
          ...state,
          auth_popup: action.auth
        };
        
  
        case "SET_CART":
          const index = state.cart.findIndex(
            (basketItem) => basketItem.product.id === action.item.product.id
          );
         
          if(index>=0){
            state.cart[index].qty += 1;
            return {
              ...state,
              cart: [...state.cart]
            }
          }
          else{
            return {
              ...state,
              cart: [...state.cart,action.item]
            };
          }
          
  
      default:
        return state;
    }
  };
  
  export default AppReducer;
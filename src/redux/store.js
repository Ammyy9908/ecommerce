import {createStore,compose, combineReducers, applyMiddleware} from "redux"
import AppReducer from "./reducers/_appReducer";
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const middlewares = [thunk, logger];


const configureStore = ()=>{
  const store = createStore(
     combineReducers({
        appReducer:AppReducer
     })
     ,
  composeEnhancers(applyMiddleware(...middlewares))
  )
  return store
}



export default configureStore;
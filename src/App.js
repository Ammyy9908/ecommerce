import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PorductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>

    <Route exact path="/cart">
    <Cart/>
    </Route>

    {/* <Route exact path="/upload">
    <Upload scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route>
    <Route exact path="/about">
    <About scrolled={scrolled} top={top} handleScroll={handleScroll}/>
    </Route> */}

   

  

   

    <Route
           exact
            path="/item/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <PorductDetail id={id && id} />;
            }}
           
          />

    

       
         
          

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;

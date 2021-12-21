import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Decrement, Increment, RemoveItem } from '../redux/actions/_appAction'
import "./Cart.css"


function CartItem({item,RemoveItem,Increment,Decrement}) {



    const handleIncrement = ()=>{
        Increment(item.product.id);
    }

    const handleDecrement = ()=>{
        if(item.qty===1){
            RemoveItem(item.product.id);
        }
        else{
            Decrement(item.product.id);
        }
    }
    
    return <div className='cart-item'>
            <div className="cart-item-thumb">
                <div className="cart-item-image">
                    <img src={item.product.image} alt="cart-item-thumb" />
                </div>
                <div className="cart-item-meta">
                    <h3>{item.product.name}</h3>
                    <button className="remove-item-btn" onClick={()=>{
                        RemoveItem(item.product.id);
                    }}>Remove</button>
                </div>
            </div>

            <div className="cart-item-price">
                <span>${item.product.price}</span>
            </div>
            <div className="cart-item-quantity">
            <div className="product-quantity-controls">
                                    <button className="increment-btn" onClick={handleIncrement}>+</button>
                                    <span>{item.qty}</span>
                                    <button className="decrement-btn" onClick={handleDecrement}>-</button>
                                </div>
            </div>

            <div className="cart-item-total">
                <span>${Math.round(item.qty*item.product.price)}</span>
            </div>
    </div>
}
function Cart({cart,RemoveItem,Increment,Decrement}) {

    const [subtotal,setSubtotal] = React.useState(0);

    React.useEffect(()=>{
        let total = 0;
        cart.forEach(item=>{
            total+=Math.round(item.qty*item.product.price);
        });
        setSubtotal(total);
    },[cart])
    return (
        <div className='cart-page'>
            <Navbar/>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Candleaf|Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <section className='cart-section'>
                <div className="cart-section-container">
                    {cart.length>0 && <div className="cart-section-header">
                        <h3>Your cart items</h3>
                        <Link to="/">Back to shopping</Link>
                    </div>}
                    {cart.length>0 && <div className="cart-items-container">
                        <div className="cart-items-container-header">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>
                        <div className="cart-items-wrapper">
                            {
                                cart.length>0 && cart.map((item,i)=>{
                                    return <CartItem item={item} RemoveItem={RemoveItem} Increment={Increment} Decrement={Decrement}/>
                                })
                            }
                        </div>
                    </div>}

                            {cart.length===0 && <div className='empty_cart'>
                                <h1>Your cart is empty!</h1>
                            </div>}
                    {cart.length>0 && <div className="cart-item-footer">
                        <div className="cart-subtotal">
                            <span>Subtotal</span> <span className="subtotal-price">${subtotal}</span>
                            <p>Tax and shipping cost will be calculated later</p>
                        </div>

                        <Link className='checkout_btn' to="/checkout">Checkout</Link>
                    </div>}
                </div>
            </section>
            {cart.length>=3 && <Footer/>}
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    RemoveItem:(id)=>dispatch(RemoveItem(id)),
    Increment:(id)=>dispatch(Increment(id)),
    Decrement:(id)=>dispatch(Decrement(id)),
})
const mapStateToProps = (state) => ({
    cart:state.appReducer.cart
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

import React from 'react'
import { connect } from 'react-redux';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import {products} from "../data/products"
import { Decrement, Increment, SetCart,RemoveItem } from '../redux/actions/_appAction';
import "./ProductDetail.css"
function PorductDetail({id,cart,SetCart,Increment,Decrement,RemoveItem}) {
    const [product,setProduct] = React.useState(null);
   
    
    const [quantity,setQuantity] = React.useState(0);


    React.useEffect(()=>{
       
        const item = products.find(product=>product.id===+id);
        setProduct(item);
    },[id])

    
    let index = product && cart.findIndex(item=>item.product.id===product.id);
    React.useEffect(()=>{
       
        if(index!=null && index>=0){
            setQuantity(cart[index].qty);
        }
        else{
                setQuantity(0)
        }
    },
    // eslint-disable-next-line
    [index]);
    
    const handleAdd = ()=>{
        SetCart({product,qty:quantity});
    }


    const handleIncrement = ()=>{
        if(index>=0){
            Increment(product.id);
            setQuantity(quantity+1);
        }
        else{
            setQuantity(quantity+1);
        }
    }


    const handleDecrement = ()=>{

        if(quantity>0){
            if(index>=0){
                if(quantity>1){
                    Decrement(product.id);
                    setQuantity(quantity-1);
                }
                else{
                    RemoveItem(product.id);
                    setQuantity(0);
                }
            }else{
                setQuantity(quantity-1);
            }
            
            
        }
        else{
            
            return setQuantity(quantity-1);
        }
    }


    const handleRemove = ()=>{
        RemoveItem(product.id);
        setQuantity(0);
        
    }


    console.log(product && product,index)

    
    return (
        <div className='product-detail-page'>
           
            <Navbar/>
            <section className='product_detail_section'>
                    <div className="product-detailed-container">
                        <div className="product-detail">
                            <div className="product-image">
                                {product && <img src={product.image} alt="" />}
                            </div>
                            <div className="product-shipping-taglines">
                            <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments. </p>
                            <span className="free-ship-tag">
                            🚚 FREE SHIPPING
                            </span>
                        </div>
                        </div>

                        <div className="product-shipping-meta">
                            <h3 className="product-name">{product && product.name}</h3>
                           
                                {product && <span className="one-time-price">$ {product.price}</span>}

                               <div className="product-qty">
                                   <span>Quantity</span>
                                   <div className="product-quantity-controls">
                                    <button className="increment-btn" onClick={handleIncrement}>+</button>
                                    <span>{quantity}</span>
                                    <button className="decrement-btn" onClick={quantity>0 && handleDecrement}>-</button>
                                </div>
                               </div>

                                <button className="add_to_cart_btn" onClick={index>=0?handleRemove:handleAdd} disabled={!quantity}>{index>=0?"Remove":"Add"} to Cart</button>

                                <div className="product-extra-features">
                                    <p><strong>Wax:</strong>Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                                    <p><strong>Fragrance:</strong>Premium quality ingredients with natural essential oils </p>
                                    <p><strong>Burning Time:</strong>70-75 hours</p>
                                </div>
                            
                        </div>
                        
                    </div>
            </section>

            <Footer/>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    SetCart:(item)=>dispatch(SetCart(item)),
    Increment:(id)=>dispatch(Increment(id)),
    Decrement:(id)=>dispatch(Decrement(id)),
    RemoveItem:(id)=>dispatch(RemoveItem(id))
})

const mapStateToProps = (state) => ({
    cart:state.appReducer.cart
})
export default connect(mapStateToProps,mapDispatchToProps)(PorductDetail)

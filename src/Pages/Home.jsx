import React from 'react'
import Navbar from '../Components/Navbar'
import "./Home.css"
import banner from "../assets/hero.png"
import ProductCard from '../Components/ProductCard'

import image from "../assets/candle_groups.png"
import checkmark from "../assets/checkmark.svg"
import Testimonial from '../Components/Testimonial'
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import Footer from '../Components/Footer'
import {products} from "../data/products"
import { Helmet } from 'react-helmet'
function Home() {


    


    const testimonials = [
        {
        id:1,
        name:"Luisa",
        message:"“I love it! No more air fresheners”",
        stars:4,
        avatar:user1
    },
    {
        id:2,
        name:"Edoardo",
        message:"Raccomended for everyone",
        stars:5,
        avatar:user2
    },
    {
        id:3,
        name:"Mart",
        message:"Looks very natural, the smell is awesome",
        stars:4,
        avatar:user3
    },
]
    return (
        <div className="home">
                      <Navbar/>

                      <Helmet>
                <meta charSet="utf-8" />
                <title>Candleaf|Home</title>
                
            </Helmet>
            <section className='hero' style={{backgroundImage:`url(${banner})`}}>
  
            {/* <img src={banner} alt="" /> */}
            <div className="banner-content">
                <div className="banner-content-main">
                <h3>🌱</h3>
                <h1>The nature candle</h1>
                <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                </div>
                <button className="banner-discover-btn">Discovery our collection</button>
            </div>
            </section>

            <section className='product-section'>
                <div className="product-container">
                    <h2>Products</h2>
                    <p>Order it for you or for your beloved ones </p>
                    <div className="products">
                        {
                            products.map((product,i)=>{
                                return <ProductCard image={product.image} name={product.name} id={product.id} price={product.price}/>
                            })
                        }
                    </div>
                </div>
            </section>

            <section className='product-detailed-section'>
                <div className='product-promo-wrapper'>
                    <div className="product-promo-text-container">
                        <h3>Clean and fragrant soy wax</h3>
                        <p>Made for your home and for your wellness</p>
                        <div className='product-features'>
                            <p> <img src={checkmark} alt="" /> Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
                            <p> <img src={checkmark} alt="" /> Hyphoallergenic: 100% natural, human friendly ingredients </p>
                            <p> <img src={checkmark} alt="" /> Handmade: All candles are craftly made with love.</p>
                            <p> <img src={checkmark} alt="" /> Long burning: No more waste. Created for last long.</p>
                        </div>
                        <button className='learn-more'>Learn more</button>
                    
                    </div>

                    <div className='promotion-image'>
                        <img src={image} alt="" />
                    </div>
                    
                </div>
            </section>

            <section className='tesimonial-section'>
                <div className='testimonial-container'>
                    <h3>Testimonials</h3>
                    <p>Some quotes from our happy customers</p>
                    <div className="testimonials">
                        {testimonials.map((testimonial,i)=>{
                            return <Testimonial name={testimonial.name} message={testimonial.message} stars={testimonial.stars} avatar={testimonial.avatar}/>
                        })}
                    </div>
                </div>
            </section>

            <scetion className="popular-products-section">
                    <div className="popular-product-container">
                        <h3>Popular</h3>
                        <p>Our top selling product that you may like</p>
                        <div className="popular-products">
                            {
                                products.slice(0,4).map((product,i)=>{
                                    return <ProductCard image={product.image} name={product.name} id={product.id} price={product.price}/>
                                })
                            }
                        </div>
                    </div>
            </scetion>
            <Footer/>
        </div>
    )
}

export default Home

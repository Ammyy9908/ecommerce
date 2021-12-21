import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"
function ProductCard({image,name,id,price}) {
    return (
        <Link to={`/item/${id}`}><div className='product-card'>
            <div className="product-background">
                {image && <img src={image} alt="" className="product-image" />}
            </div>
            <div className="product-card-footer">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
        </div></Link>
    )
}

export default ProductCard

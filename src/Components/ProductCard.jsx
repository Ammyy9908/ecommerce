import React from 'react'
import "./ProductCard.css"
function ProductCard({image,name}) {
    return (
        <div className='product-card'>
            <div className="product-background">
                {image && <img src={image} alt="" className="product-image" />}
            </div>
            <div className="product-card-footer">
                <h4>{name}</h4>
                <p>$10.00</p>
            </div>
        </div>
    )
}

export default ProductCard

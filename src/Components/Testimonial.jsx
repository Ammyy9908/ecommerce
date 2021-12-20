import React from 'react'
import "./Testimonial.css"
import starIcon from "../assets/star.svg"
function Testimonial({avatar,name,message,stars}) {
    return (
        <div className='testimonial-card'>
            <div className="testimonil-card-wrapper">
                <div className="testimonial-user-avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="stars">
                    {
                        [...Array(stars)].map((star,i) => <span><img src={starIcon} alt="" key={i} /></span>)
                    }
                </div>
                <p>"{message}"</p>
                <span className="testimonial-user-name">{name}</span>
            </div>
        </div>
    )
}

export default Testimonial

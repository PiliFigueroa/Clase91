import React from 'react';
import './Card.css'

const Card = ({ img, shipping, title, price, condition }) => {
    return(
        <div className='container-card' style={{backgroundColor: !shipping && "red"}}>
            <img src={img} alt={title} />
            <div className="product-details">
                <h6>{title}</h6>
                <p><span>Price: </span>${price}</p>
                <p><span>Condition: </span>{condition}</p>
                {shipping && <p className='free-shipping'>Free Shipping!</p>}
            </div>
        </div>
    )
}

export { Card }
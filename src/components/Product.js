import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="product_info">
                <p>product title</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="" alt="" />
            <button>Add to busket</button>
        </div>
    );
};

export default Product;
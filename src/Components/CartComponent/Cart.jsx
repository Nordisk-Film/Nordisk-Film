import React from 'react';
import './Cart.scss';
import closeIcon from '../../assets/images/close.svg';

const Cart = ({ isOpen, toggleCart }) => {
    return (
        <>
            <div className={`CartOverlay ${isOpen ? 'open' : ''}`} onClick={toggleCart}></div>
            <div className={`Cart ${isOpen ? 'open' : ''}`}>
                <div className='CartHeader'>
                    <div id='CartTitle'>
                        <h2>Shopping cart</h2>
                    </div>
                    <div className='CartCloseContainer' onClick={toggleCart}>
                        <img src={closeIcon} alt="Close" className="CloseCart" />
                    </div>
                </div>
                {/* Cart items here */}
            </div>
        </>
    );
};

export default Cart;
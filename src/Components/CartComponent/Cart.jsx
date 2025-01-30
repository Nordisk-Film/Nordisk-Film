import React from 'react';
import './Cart.scss';
import closeIcon from '../../assets/images/close.svg';

const Cart = ({ isOpen, toggleCart }) => {
    return (
        <>
            <div className={`CartOverlay ${isOpen ? 'open' : ''}`} onClick={toggleCart}></div>
            <div className={`Cart ${isOpen ? 'open' : ''}`}>
                <header className='CartHeader'>
                    <div id='CartTitle'>
                        <h2>Shopping cart</h2>
                    </div>
                    <div className='CartCloseContainer' onClick={toggleCart}>
                        <img src={closeIcon} alt="Close" className="CloseCart" />
                    </div>
                </header>
                <div className='allProductsContainer'>
                    {/* product example */}
                    <div className='productContainer'>
                        <div>
                            <img src="src/Components/CartComponent/midlertidlig images/matrixrevolutionsplakat.jpg" alt="product Image" />
                        </div>
                        <div className='productText'>
                            {/* product title */}
                            <h2 className='productTitle'>The Matrix Revolutions</h2>
                            <p>100kr</p>
                            <p className='productHeight'>Height 85 cm</p>
                            <p className='productWidth'>Width 62 cm</p>
                            <div>
                                <div>
                                    {/* quantity increaser/decreaser nice to have */}
                                    </div>
                                    <div>
                                        <p>remove</p>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Subtotal</p>
                            </div>
                            <div>
                                <p>100,00 kr</p>
                            </div>
                                <button className='CheckOut'>
                                    Checkout
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;
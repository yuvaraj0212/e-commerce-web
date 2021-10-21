import React, { useState,useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';

const ModuleDetailActionsMobile = ({ ecomerce, product }) => {
    const [user, setUser] = useState([]);
    const { addItem } = useEcomerce();
    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('currentUser'));
                setUser(data);
    }, [product])
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        console.log(user);
        if (user) {
            console.log(product.id);
            addItem({ productId: product.id, quantity: 1,userId:user }, ecomerce.cartItems, 'cart');
        } else {
           return Router.push('/account/login')
        }
    };

    return (
        <div className="ps-product__actions-mobile">
            <a
                className="ps-btn ps-btn--black"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Add to cart
            </a>
            <a
                className="ps-btn"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Buy Now
            </a>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);

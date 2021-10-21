import React, { Component,useState,useEffect } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import { connect } from 'react-redux';
import Link from 'next/link';
import AccountQuickLinksMobile from './AccountQuickLinksMobile';



const MobileHeaderActions = ({ auth, ecomerce }) => {
    
    const [products, setProducts] = useState([]);
    const { cartItems } = ecomerce;
    const getproducts = async () => {
        const Products = await ProductRepository.getProductsByCartId();
        setProducts(Products);
    }
    useEffect(() => {
        getproducts();
    }, [ecomerce]);
    return (
        <div className="navigation__right">
            <Link href="/account/shopping-cart">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{products ? products.length : 0}</i>
                    </span>
                </a>
            </Link>

            {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                <AccountQuickLinksMobile />
            ) : (
                <div className="header__extra">
                    <Link href="/account/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default connect((state) => state)(MobileHeaderActions);

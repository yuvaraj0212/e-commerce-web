import React, { Component } from 'react';
import Link from 'next/link';
import { logOut } from '~/store/auth/action';
import router, { Router } from 'next/router';
import { connect, useDispatch } from 'react-redux';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const handleLogout = (e) => {
            e.preventDefault();
            sessionStorage.clear();
            this.props.dispatch(logOut());
            router.push("/");
        };
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Hello</figcaption>
                                            {/* <p>{user?user.username:''}</p> */}
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            <li className="active">
                                                <Link href="/account/my-account">
                                                    <a>Dashboard</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Orders</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Addresses</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Account Details</a>
                                                </Link>
                                            </li>
                                            <li>
                                            <a onClick={(e) => handleLogout(e)}>
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="ps-page__content">
                                <div className="ps-page__dashboard">
                                    <p>
                                        Hello <strong>user@gmail.com</strong>!
                                    </p>
                                    <p>
                                        From your account dashboard you can view
                                        your{' '}
                                        <Link href="/account/orders">
                                            <a>recent orders</a>
                                        </Link>
                                        , manage your{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                shipping and billing addresses
                                            </a>
                                        </Link>
                                        , and{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                edit your password and account
                                                details
                                            </a>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth.isLoggedIn
    };
};


export default connect(mapStateToProps)  (MyAccount);

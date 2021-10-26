import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { getUser } from '~/components/api/url-helper';
import { useForm } from 'antd/lib/form/Form';

const FormCheckoutInformation = () => {
    // class FormCheckoutInformation extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             user: []
    //         }
    //     }
    const [user, setUser] = useState([])
    useEffect(() => {
        let data = JSON.parse(sessionStorage.getItem('token'))
        console.log(data);

        const config = {
            headers: {
                Authorization: `Bearer ${data}`
            }
        };
        getUser(config).then(
            res => {
                console.log(res);
                setUser(res.data.result);
            }
        )

    }, [])
    const handleLoginSubmit = (value) => {
        console.log(value);
        Router.push('/account/shipping');
    };
    //  [form] = Form.useForm();
    // form.setFieldsValue({
    //     username: user.username,
    //     email: props.data.email,
    //     phone: props.data.phone,
    //     address: props.data.address,

    // });

    // render() {
    const [form] = Form.useForm();
    form.setFieldsValue({
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,

    });
    return (
        <Form
            className="ps-form__billing-info"
            onFinish={handleLoginSubmit}
            form={form}>
            <h3 className="ps-form__heading">Contact information</h3>
            <div className="form-group">
                <Form.Item
                    name="phone"
                    initialValue={() => user.phone}
                    rules={[
                        {
                            required: true,
                            message:
                                'Enter mobile phone number!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="tel"
                        placeholder="Email or phone number"
                    />
                </Form.Item>
            </div>
            {/* <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="keep-update"
                    />
                    <label htmlFor="keep-update">
                        Keep me up to date on news and exclusive offers?
                    </label>
                </div>
            </div> */}
            <h3 className="ps-form__heading">Shipping address</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your name!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder=" Name"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        {/* <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your last name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Item> */}
                            <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: false,
                                    message: 'Enter a postal Code!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Enter an address!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        defaultValue={user.address}
                        placeholder="Address"
                    />
                </Form.Item>
            </div>
            {/* <div className="form-group">
                <Form.Item
                    name="apartment"
                    rules={[
                        {
                            required: true,
                            message: 'Enter an Apartment!',
                        },
                    ]}>
                    <Input
                        className="form-control"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                    />
                </Form.Item>
            </div> */}
            {/* <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a city!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="city"
                                placeholder="City"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a postal oce!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="postalCode"
                                placeholder="Postal Code"
                            />
                        </Form.Item>
                    </div>
                </div>
            </div> */}
            {/* <div className="form-group">
                <div className="ps-checkbox">
                    <input
                        className="form-control"
                        type="checkbox"
                        id="save-information"
                    />
                    <label htmlFor="save-information">
                        Save this information for next time
                    </label>
                </div>
            </div> */}
            <div className="ps-form__submit">
                <Link href="/account/cart">
                    <a className="ps-btn">
                        <i className="icon-arrow-left mr-2"></i>
                        Return to shopping cart
                    </a>
                </Link>
                <div className="ps-block__footer">
                    <button className="ps-btn" type="submit">Continue to shipping</button>
                </div>
            </div>
        </Form>
    );
}
// }

export default FormCheckoutInformation;

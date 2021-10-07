import React,{useState,useEffect} from 'react';
import { DatePicker, Form, Radio, Input, Button, notification } from 'antd';


const FormChangeUserInformation = (props) => {
    const [user, setUser] = useState([]);
    console.log("props", props);
    
    useEffect(() => {setUser(props.data)},[])
    // return (
    //     <form className="ps-form--account-setting">
    //         <div className="ps-form__header">
    //             <h3>Account Information</h3>
    //         </div>
    //         <div className="ps-form__content">
    //             <div className="form-group">
    //                 <input
    //                     className="form-control"
    //                     type="text"
    //                     placeholder="Username or email address"
    //                 />
    //             </div>
    //             <div className="row">
    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="First name"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="Last name"
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="Phone Number"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="Email Address"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-12">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="Address"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="City"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <div className="form-group">
    //                         <input
    //                             className="form-control"
    //                             type="text"
    //                             placeholder="Country"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className="form-group submit">
    //                 <button className="ps-btn">Update profile</button>
    //             </div>
    //         </div>
    //     </form>
    // );
    const [form] = Form.useForm();
    const handelsubmit=(values)=>{
        console.log(values);
    };
    console.log("user ,",user);
    form.setFieldsValue({
        username: user.username,
        email: user.email,
        phone: user.phone,
        // details: user.details,
        // discount: user.discount,
        // description: user.description,
        
    });
    return (
        <>
            <Form className="ps-form--account-setting" form={form} onFinish={handelsubmit}>
                <div className="ps-form__header">
                    <h3>Account Information</h3>
                </div>
                <div className="ps-form__content">
                    <div className="form-group">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Username or email address!',
                                },
                            ]}>
                            <Input
                                className="form-control"
                                type="text"
                                placeholder="Username or email address"

                            />
                        </Form.Item>

                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                            <Form.Item
                            name="username"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your First name!',
                                },
                            ]}>
                              <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="First name"
                                />
                        </Form.Item>
                              
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <Form.Item
                            name="lastname"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Last name!',
                                },
                            ]}>
                             <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last name"
                                />
                        </Form.Item>
                               
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group"><Form.Item
                            name="phone"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Phone Number!',
                                },
                            ]}>
                           <Input
                                    className="form-control"
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                        </Form.Item>
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group"><Form.Item
                            name="email"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Email Address!',
                                },
                            ]}>
                               <Input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email Address"
                                />
                        </Form.Item>
                             
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group"><Form.Item
                            name="Address"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Address!',
                                },
                            ]}>
                            <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Address"
                                />
                        </Form.Item>
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group"><Form.Item
                            name="City"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your City!',
                                },
                            ]}>
                            <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="City"
                                />
                        </Form.Item>
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group"><Form.Item
                            name="Country"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Country!',
                                },
                            ]}>
                            <Input
                                 className="form-control"
                                 type="text"
                                 placeholder="Country"
                            />
                        </Form.Item>
                                
                            </div>
                        </div>
                    </div>

                    <div className="form-group submit">
                        <button className="ps-btn">Update profile</button>
                    </div>
                </div>
            </Form>
        </>
    )
};


export default FormChangeUserInformation;

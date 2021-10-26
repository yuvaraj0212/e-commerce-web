
import axios from "axios";

export const registerUser = (data) => axios.post("http://localhost:8899/signup", data);

export const getToken = (data) => axios.post("http://localhost:8899/signin", data);

export const getListuser = () => axios.get("http://localhost:8899/user-list");

export const getProductList = () => axios.get("http://localhost:8899/product/product-list");

export const getUser = (id) => axios.get("http://localhost:8899/current-user", id);

export const getCatrgrylist = () => axios.get("http://localhost:8899/category/category-list");

export const forgotpassword = (data) => axios.get('http://localhost:8899/forget-password', { params: data });

export const Resetps = (data) => axios.post(`http://localhost:8899/reset-password/${data.emailId}`, data);

export const getUserCart = (cartId) => { return axios.get("http://localhost:8899/cart/user-cart", cartId) }

export const addCart = (data) =>  axios.post("http://localhost:8899/cart/add-cart", data); 

export const removeCart = (data) => { 
    return axios.delete("http://localhost:8899/cart/delete-cart",{ headers: {"Authorization" : `Bearer ${data.token}`}, params:data.data }  )} 

 export const updatecart = (data) => axios.post("http://localhost:8899/cart/update-cart", data);
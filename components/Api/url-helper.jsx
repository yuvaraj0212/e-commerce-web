
import axios from "axios";

export const registerUser = (data) => axios.post("http://localhost:8899/signup",data);

export const getToken = (data) => axios.post("http://localhost:8899/signin",data);

export const getListuser = () => axios.get("http://localhost:8899/user-list");

export const getUser = (id) => axios.get("http://localhost:8899/current-user",id);
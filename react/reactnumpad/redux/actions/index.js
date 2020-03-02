import { store } from '../../src/index.js';
import axios from 'axios';
const siteUrl="http://localhost:5001";
export function UpdateAvatar(newUsername) {
    store.dispatch({
        type: 'UpdateAvatar',
        payload: {
            accountAvatar: newUsername
        }
    });
}

export function axiosPost(pageUrl,data) {
    axios.post(siteUrl + pageUrl, data).then(res =>{
        return res.data;
    });
}


export function loginAuth(pageUrl,token) {
    console.warn("token1213",token);
    let userData = {
        username: "e.tuna@extratik.com",
        password: "123"
    }
    console.warn("token2",token);
        return axios.post(siteUrl + pageUrl, userData).then(res =>{
            console.warn("token3",token);
            //const token='token';
            localStorage.setItem('jwtToken',token)
            setAuthorizationToken(token);
        });
    console.warn("token4",token);
}
export function setAuthorizationToken(token) {
    if (token){
        axios.defaults.headers.common['Authorization']='Bearer:'+ token;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

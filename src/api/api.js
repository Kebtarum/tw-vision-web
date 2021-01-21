import * as axios from 'axios';
import { Redirect } from 'react-router-dom';
import LocalStorageService from '../services/LocalStorageService';
import { setRedirect } from '../redux/authReducer'

// const localStorageService = LocalStorageService.getService();

const instance = axios.create({
    baseURL: 'http://erp.apptrix.ru/api/clients',
    // headers,

})

// instance.interceptors.response.use((response) => new Promise((resolve, reject) => {
//     resolve(response);
// }),
//     (error) => {
//         if (!error.response) {
//             return new Promise((resolve, reject) => {
//                 reject(error);
//             });
//         }
//         console.log(error.response.status)
//         // debugger
//         if (error.response.status === 401) {
//             // localStorageService.clearToken();
//             window.location.hash ='/login';
//         } else {
//             return new Promise((resolve, reject) => {
//                 reject(error);
//             });
//         }
//     }
// )

//////////////////////////////////////////////////////////////////////////
// instance.interceptors.request.use( config => {

//     const token = localStorageService.getAccessToken();
//     debugger
//     if(token){
//         config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
// }, error => {
//     Promise.reject(error)
// });

// instance.interceptors.response.use((response) => {
//     return response
// }, function (error){
//     const originalRequest = error.config;
//     debugger

//     if(error.response.status === 401 && originalRequest.url === 
//         '/'){

//         }

//     if(error.response.status === 401 && !originalRequest._retry ){
//         originalRequest._retry = true;
//         const refreshToken = localStorageService.getRefreshToken();
//         debugger
//         return instance.post('/token/refresh/',
//             {
//                 "refresh": refreshToken
//             })
            
//             .then(res => {
//                 debugger
//                 if(res.status === 201){
//                     localStorageService.setToken(res.data);
//                     instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
//                     return instance(originalRequest);
//                 }
//             });
//     }
//     return Promise.reject(error);
// });
//////////////////////////////////////////////////////////////////////////


export const singUpAPI = {
    postRegistration(email, password, phone, invited_by, name, surname, country_key) {
        const data = {
            user: {
                email: email,
                password: password,
            },
            phone: phone,
            invited_by: invited_by,
            name: name,
            surname: surname,
            country_key: country_key
        }
        return instance.post('/create/', data
            // {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }
        )
            .then(response => {
                return response.data;
            });
    }
}

export const tokenAPI = {
    postToken(username, password) {
        return instance.post('/token/',
            { username, password },
            // {
            //     headers: {
            //         'Authorization': `Bearer ${localStorage.token}`
            //     }
            // }
        )
            .then(response => {
                return response.data;
            });
    },
    postRefresh(token_refresh) {
        return instance.post('/token/refresh',{
            'refresh': `${token_refresh}`
        }
        )
            .then(response => {
                return response.data;
            });
    }
}

export const userAPI = {
    getUser(userId, token__access) {
        return instance.get(`/${userId}/`, {
            headers: {
                'Authorization': `Bearer ${token__access}`
            }
        })
            .then(response => {
                return response.data;

            });
    },
}
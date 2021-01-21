import { Redirect } from "react-router-dom";
import { singUpAPI, tokenAPI, userAPI } from "../api/api";

let initialState = {
    
    // savedToken: null,
    isAuth: false,
    savedToken: null,
    email: null,
    username: null,
    name: null,
    surname: null,
    phone: null,

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLIENT-ID':
            return {
                ...state,
                // isAuth: true,
            }
        case 'AUTH-SUCCESS':
            return{
                ...state,
                savedToken: action.token,
                isAuth: true,
            }
        case 'SET-USER-DATA':
            return{
                ...state,
                email: action.email,
                username: action.username,
                name: action.name,
                surname: action.surname,
                phone: action.phone,
            }

        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                savedToken: null,
                email: null,
                username: null,
                name: null,
                surname: null,
                phone: null,
            }
        default:
            return state;

    }
}

// export const setUserId = (userId) => {
//     return{
//         type: 'CLIENT-ID',
//         userId,
//     }
// }

export const authSuccess = (token) => {
    return{
        type: 'AUTH-SUCCESS',
        token,
        
    }
}
export const setUserData = (email, username, name, surname, phone) => {
    return{
        type: 'SET-USER-DATA',
        email, username, name, surname, phone,
        
    }
}

export const logout = () => {
    localStorage.removeItem('token_access');
    localStorage.removeItem('token_refresh');
    return{
        type: 'LOGOUT',
        
    }
}

export const registerMe = (formData) => async(dispatch) =>{
    
    let data = await singUpAPI.postRegistration(
        formData.email, 
        formData.password, 
        formData.phone, 
        formData.invited_by,
        formData.name,
        formData.surname,
        formData.country_key
        );
    
    
    alert("Регистрация прошла успешно!");
    if(data){
        return <Redirect to={'/login'} />
    }
}

export const giveToken = (username, password) => async(dispatch) =>{
    
    let data = await tokenAPI.postToken(username, password);
    if(data){
        console.log(data)
        localStorage.setItem('token_access', data.access);
        localStorage.setItem('token_refresh', data.refresh);
        localStorage.setItem('token_userId', data.client_id);
        dispatch(authSuccess(data.access))
    }
}
export const refreshToken = (token_refresh) => async(dispatch) =>{
    
    let data = await tokenAPI.postRefresh(token_refresh);
    debugger
    if(data){
        console.log(data)
        localStorage.setItem('token_access', data.access);
    }
}


export const getUser = (userId, token__access) => async (dispatch) => {
    let data = await userAPI.getUser(userId, token__access);
    if(data){
        dispatch(setUserData(data.email, data.username, data.name, data.surname, data.phone))
    }
    // data.sort((u0, u1) => {
    //     return (u0.id > u1.id ? 1 : -1);
    // });
    // dispatch(setUsers(data))
}

export default authReducer;
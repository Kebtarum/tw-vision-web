import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function MainPage(props) {

    const onLogout = () => {
        props.logout();
    }

    return (
        <div className='MainPage'>
            <div className='container'>
                <div>
                
                    <h3>{props.email}</h3>
                    <h3>{props.username}</h3>
                    <h3>{props.name}</h3>
                    <h3>{props.surname}</h3>
                    <h3>{props.phone}</h3>
                </div>
                <button onClick={onLogout} className={"btn"} >Logout</button>
            </div>

        </div>
    )
}



export default MainPage;
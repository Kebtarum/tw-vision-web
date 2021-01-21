import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import MainPage from './MainPage';
import { getUser, refreshToken, logout } from '../../redux/authReducer'



class MainPageContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {buf: false};  
    // }

    componentDidMount() {

        // this.refreshProfile()
        
        // let {savedToken} = this.props;
        // if(!savedToken){
        //     return <Redirect to={'/'} /> 
        // }
        

        this.props.getUser(localStorage.token_userId, localStorage.token_access)
            .catch(()=> this.props.history.push('/login'))        
    }

    render(){

        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

        return (
            <div className='MainPage'>
                <MainPage logout={this.props.logout}
                
                email={this.props.email}
                username={this.props.username}
                name={this.props.name}
                surname={this.props.surname}
                phone={this.props.phone}
                 />
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        getUser: state.auth.getUser,
        userId: state.auth.userId,
        redirectTo: state.auth.redirectTo,
        
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        username: state.auth.username,
        name: state.auth.name,
        surname: state.auth.surname,
        phone: state.auth.phone,
    }
}

export default compose(
    connect(mapStateToProps, { getUser, refreshToken, logout }),
    withRouter
    )(MainPageContainer);
    
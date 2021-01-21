import React, { useState } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { giveToken } from '../../redux/authReducer'
import './Login.css'
import { compose } from 'redux';

function Login(props) {

    const required = value => (value ? undefined : 'Обязателен для заполнения')
    
    const onSubmit = (formData) => {
        props.giveToken(formData.username, formData.password)
            .then(()=> props.history.push('/'))
            .catch(err => {
                console.log(err)
                alert('err')})
    }

    if (props.isAuth) {
        return <Redirect to={'/'} />
    }

    return (
        <div className='Login'>
            <div className='nav'>
          {/* <NavLink className='nav__item' to='/'>Перейти в MainPage</NavLink> */}
          <NavLink className='nav__item' to='/signup'>Перейти в SignUp</NavLink>
          <NavLink className='nav__item' to='/login'>Перейти в Login</NavLink>
        </div>
            <div className='container'>
                <Form onSubmit={onSubmit}>
                    {props => (
                        <form className='form' onSubmit={props.handleSubmit}>
                            <div className='form__item'>
                                <label className="form__label">Электронная почта</label>
                                <Field className="form__input" name="username" component="input" placeholder="Email" type="email" validate={required} />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Пароль</label>
                                <Field className="form__input" name="password" component="input" placeholder="Пароль" type="password" validate={required} />
                            </div>
                            <button className='btn form__btn' type="submit">Submit</button>
                        </form>
                    )}
                </Form>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        redirectTo: state.auth.redirectTo,
        isAuth: state.auth.isAuth,
    }
}

// export default connect(mapStateToProps, { giveToken })(Login);
export default compose(
    connect(mapStateToProps, { giveToken }),
    withRouter
    )(Login);
    
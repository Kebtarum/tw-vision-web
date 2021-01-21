import React, { useState } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { registerMe } from '../../redux/authReducer'
import './SignUp.css'
import { compose } from 'redux';

function SignUp(props) {

    const onSubmit = (formData) => {
        props.registerMe(formData)
            .then(()=> props.history.push('/login'))
            .catch(err => {
                let errMessage = []
                // console.log.apply(err.response.data)

                err.response.data.user.email && errMessage.push('Поле Адерес электронной почты: ' + err.response.data.user.email + '\n')
                err.response.data.user.password && errMessage.push('Поле Пароль: ' + err.response.data.user.password + '\n')
                err.response.data.invited_by && errMessage.push('Поле Invited by: ' + err.response.data.invited_by + '\n')
                err.response.data.name && errMessage.push('Поле Ваше имя: ' + err.response.data.name + '\n')
                err.response.data.surname && errMessage.push('Поле Ваша фамилия: ' + err.response.data.surname + '\n')
                err.response.data.country_key && errMessage.push('Поле Ключ страны: ' + err.response.data.country_key + '\n')
                alert(errMessage)
            })
    }

    return (
        <div className='signup'>
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
                                <label className="form__label">Адресс электронной почты</label>
                                <Field className="form__input" name="email" component="input" placeholder="Email" type="email" />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Пароль</label>
                                <Field className="form__input" name="password" component="input" placeholder="Пароль" type="password" />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Телефон</label>
                                <Field className="form__input" name="phone" component="input" placeholder="Телефон" />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Invited by</label>
                                <Field className="form__input" name="invited_by" component="select" placeholder="Пригласительный код">
                                    <option selected value="RU-637164">RU-637164</option>
                                </Field>
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Ваше имя</label>
                                <Field className="form__input" name="name" component="input" placeholder="Имя" />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Ваша фамилия</label>
                                <Field className="form__input" name="surname" component="input" placeholder="Фамилия" />
                            </div>
                            <div className='form__item'>
                                <label className="form__label">Двухбуквенный код страны</label>
                                <Field className="form__input" name="country_key" component="select" placeholder="код страны">
                                <option selected value="RU">RU</option>
                                </Field>
                            </div>
                            <button className='btn form__btn' type="submit">Submit</button>
                        </form>
                    )}
                </Form>
            </div>
        </div>
    )
}


// class SignUpContainer extends React.Component {

//     // refreshProfile() {
       
//     //         let token = this.props.savedToken;
//     //         if(!token){
//     //             return <Redirect to={'/'} />
//     //         }
        
//     // }

//     // componentDidMount() {

//     //     // this.refreshProfile()
        
//     //     let {savedToken} = this.props;
//     //     if(!savedToken){
//     //         return <Redirect to={'/'} /> 
//     //     }
//     //     this.props.getUsers(savedToken);
//     // }

//     render() {
//         // if (!this.props.isAuth) {
//         //     return <Redirect to={'/'} />
//         // }
//         return (
//             <div>
//                 <SignUp registerMe={this.props.registerMe}
//                 history={this.props.history} />
//             </div>
//         )
//     }
// }


const mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, { registerMe }),
    withRouter
    )(SignUp);
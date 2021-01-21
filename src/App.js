import React from 'react';
import './App.css';
import { Route, HashRouter, NavLink, Redirect } from 'react-router-dom';
import store from './redux/redux-store'
import { Provider, connect } from 'react-redux';
import MainPageContainer from './Components/MainPage/MainPageContainer';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { authSuccess } from './redux/authReducer'

class App extends React.Component {

//   componentDidMount() {

//     // this.refreshProfile()
    
//     // let {savedToken} = this.props;
//     // if(!savedToken){
//     //     return <Redirect to={'/'} /> 
//     // }
    

//     this.props.getUser(localStorage.token_userId, localStorage.token_access)
//         .catch(()=> this.props.history.push('/login'))        
// }
  render() {
    const token = localStorage.token_access;
    if (token) {
      this.props.authSuccess(token)
    }

    return (
      <div className="App">
        {/* <div className='nav'>
          <NavLink className='nav__item' to='/'>Перейти в MainPage</NavLink>
          <NavLink className='nav__item' to='/signup'>Перейти в SignUp</NavLink>
          <NavLink className='nav__item' to='/login'>Перейти в Login</NavLink>
        </div> */}

        <Route exact path="/">
          <MainPageContainer />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const AppContainer = connect(mapStateToProps, {authSuccess})(App);

const FinalJSApp = (props) => {
  return (

    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>

  )
}

export default FinalJSApp;
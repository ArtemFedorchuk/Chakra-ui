import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  ErrorPage,
  HomePage,
  SettingsPage,
  LoginPage,
  ForgotPasswordPage,
  RegistrationPage
} from './pages';

import { ThemeContext } from './contexts/';
import {useAuthData} from './contexts/auth-context/authContext';

// import { ReactTool } from './client/client-socket.jsx'

function App() {
  // ReactTool()

  const { dataAuth } = useAuthData()
  const auth = localStorage.getItem('auth');

  const protectedRoute = (Component) => {
    return auth || dataAuth.auth ? Component : (<Redirect to="/" />)
  };

  return (
    <div className="App">
      <ThemeContext>
        <Switch>
          <Route exact path="/" render={ () => <LoginPage/>} />
          <Route path="/sign-in" render={ () => <LoginPage/>} />
          <Route path="/registration" render={ () => <RegistrationPage/>} />
          <Route path="/forgot-password" render={ () => <ForgotPasswordPage/>} />
          {protectedRoute(<Route path="/home" render={ () =>  <HomePage/>} />)}
          {protectedRoute(<Route path="/settings" render={ () =>  <SettingsPage/>} />)}
          <Route render={ () => <ErrorPage />} />
        </Switch>
      </ThemeContext>
    </div>
  );
}

export default App;

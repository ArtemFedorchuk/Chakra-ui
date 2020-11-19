import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home-page';
import ErrorPage from './pages/Eror-page';
import { LogIn, ForgotPassword, Registration } from './organisms/';
import { ThemeContext } from './contexts/';

function App() {
  const auth = localStorage.getItem('auth');

  const protectedRoute = (Component) => {
    if (auth === 'true') {
      return Component
    }
    else {
     return <Redirect to="/" />
    }
  };

  return (
    <div className="App">
      <ThemeContext>
        <Switch>
          <Route exact path="/" render={ () => <LogIn/>} />
          <Route path="/sign-in" render={ () => <LogIn/>} />
          <Route path="/registration" render={ () => <Registration/>} />
          <Route path="/forgot-password" render={ () => <ForgotPassword/>} />
          <Route path="/sign-up" render={ () => <h1>SignUpPage</h1>} />
          <Route path="/reset-password" render={ () => <h1>ResetPasswordPage</h1>} />
          {protectedRoute(<Route path="/home" render={ () =>  <HomePage/>} />)}
          <Route render={ () => <ErrorPage />} />
        </Switch>
      </ThemeContext>
    </div>
  );
}

export default App;

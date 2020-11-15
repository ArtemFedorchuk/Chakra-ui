import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home-page';
import ErrorPage from './pages/Eror-page';
import SignIn from './organisms/SignIn';
import ThemeContext from './contexts/theme/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Switch>
          <Route exact path="/" render={ () => <SignIn/>} />
          <Route path="/home" render={ () =>  <HomePage/>} />
          <Route render={ () => <ErrorPage />} />
        </Switch>
      </ThemeContext>
    </div>
  );
}

export default App;

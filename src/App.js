import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home-page';
import ErrorPage from './pages/Eror-page';
import LogIn from './organisms/LogIn';
import { ThemeContext } from './contexts/';

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Switch>
          <Route exact path="/" render={ () => <LogIn/>} />
          <Route path="/home" render={ () =>  <HomePage/>} />
          <Route render={ () => <ErrorPage />} />
        </Switch>
      </ThemeContext>
    </div>
  );
}

export default App;

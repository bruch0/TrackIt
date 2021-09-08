import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../globalStyles';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register'
import Habits from '../Pages/Habits/Habits';
import Today from '../Pages/Today/Today';
import { LoginContext } from '../Context/Context';

function App() {
  let [dayProgress, setDayProgress] = useState(0);
  let [logged, setLogged] = useState(false);
  let [userPhoto, setUserPhoto] = useState('');
  let [userToken, setUserToken] = useState('');

  return (
    <BrowserRouter >
      <LoginContext.Provider value={
          {dayProgress, setDayProgress, logged, setLogged, userPhoto, setUserPhoto, userToken, setUserToken}
        }>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>

          <Route path="/cadastro">
            <Register />
          </Route>

          <Route path="/habitos">
            <Habits />
          </Route>

          <Route path="/hoje">
            <Today />
          </Route>
        </Switch>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

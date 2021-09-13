import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../globalStyles';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register'
import CheckLoggedHabits from '../Pages/Habits/Habits';
import CheckLoggedToday from '../Pages/Today/Today';
import CheckLoggedHistory from '../Pages/History/History';
import { Context } from '../Context/Context';

function App() {
  let [dayProgress, setDayProgress] = useState(0);
  let [logged, setLogged] = useState(false);
  let [userPhoto, setUserPhoto] = useState('');
  let [userToken, setUserToken] = useState('');

  return (
    <BrowserRouter >
      <Context.Provider value={
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
            <CheckLoggedHabits />
          </Route>

          <Route path="/hoje">
            <CheckLoggedToday />
          </Route>

          <Route path="/historico">
            <CheckLoggedHistory />
          </Route>
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;

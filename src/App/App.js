import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register'
import Habits from '../Pages/Habits/Habits';

function App() {
  return (
    <BrowserRouter >
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import AuthForm from './Pages/AuthForm';
import HomePage from './Pages/HomePage';
import {Redirect,Switch,Route} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log("isLog",isLoggedIn)
  return (
    <Switch>
      <Route path="/authform">
        <AuthForm/>
        </Route>
        {isLoggedIn && <Route path="/homepage" exact>
          <HomePage/>
        </Route>}
        <Route path="*">
          <Redirect to="/authform">
            <AuthForm />
          </Redirect>
          </Route>
    </Switch>
  );
}

export default App;

import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
import Check from './components/Check/Check';
import Aboutus from './components/Aboutus/Aboutus';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const userContext = createContext();

function App() {
  const [login, setLogin] = useState({});
  return (
    <userContext.Provider value={[login, setLogin]}>
      <div className="App">
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/about">
              <Aboutus></Aboutus>
            </Route>

            <PrivateRoute path="/orders">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route path="/check/:pId">
              <Check></Check>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>

      </div>
    </userContext.Provider>
  );
}

export default App;

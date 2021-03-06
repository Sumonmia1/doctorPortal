import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Switch>
          <PrivateRoute path="/appointment">
           <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>
          <Route exact path="/">
         <Home></Home>
          </Route>
        </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

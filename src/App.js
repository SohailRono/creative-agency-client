import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/Services/ServiceList';
import AddService from './components/Dashboard/Services/AddService';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddOrder from './components/Dashboard/Order/AddOrder';
import OrderList from './components/Dashboard/Order/OrderList';
import AddReview from './components/Dashboard/Review/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ isSignIn: false, name: '', email: '', photoURL: '' });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" >
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addorder/:id">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/addorder">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/servicelist" >
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/addservice" >
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addreview">
            <AddReview></AddReview>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React,{useState,useContext} from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import{BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import firebase from "firebase/app"
import "firebase/auth";
//components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './context/UserContext';
import Footer from './layout/footer';
import Header from './layout/Navbar';
import firebaseconfig from './config/firebaseconfig';

//initial firebase

firebase.initializeApp(firebaseconfig)

const App = () => {

const[user,setUser]=useState(null);

  return (
    <div>
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header/>
    <Switch>
    <Route  path="/" exact component={Home}/>
    <Route  path="/signin" exact component={Signin}/>
    <Route  path="/signup" exact component={Signup}/>
    <Route  path="*" exact component={PageNotFound}/>
    </Switch>
    <Footer/>
    </UserContext.Provider>
  
    </Router>
    </div>
  );
}

export default App;

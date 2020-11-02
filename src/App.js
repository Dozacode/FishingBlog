import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Moon from "./troy.jpg";  //background photo needs to be changed to public folder
import Header from './component/Header';
import Blog from './component/blog';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Main from './pages/Main';
import ErrorPAge from './pages/ErrorPage';
import Bio from './pages/Bio';


export default function App(){

  return(


  <div >
  <Router>
  


      <Switch>
      <Route exact path ='/bio' component={Bio}/>
      <Route exact path ='/' component={Main}/>
      <Route exact path='/404' component={ErrorPAge} />
      <Redirect to='/404' />
      </Switch>

<CssBaseline />
    </Router>
  
  </div>


  )
}


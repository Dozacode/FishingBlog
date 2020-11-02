import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Moon from "../troy.jpg";  //background photo needs to be changed to public folder
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Header from '../component/Header';


const useStyles = makeStyles((theme) => ({
root:{
minHeight:'100vh', 
backgroundImage: `url(${process.env.PUBLIC_URL + Moon})`,  //Need to move public file!!
backgroundPosition: 'center center', 
backgroundSize: 'cover', 
backgroundRepeat: 'no-repeat'


}

}));


export default function Main(){

const classes= useStyles();

  return(


  <div className={classes.root}>
  <Header />

  </div>

  

  )
}


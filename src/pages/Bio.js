import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import VRBO from "../photo/VRBO.jpg";  //background photo needs to be changed to public folder
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Header from '../component/Header';


const useStyles = makeStyles((theme) => ({
root:{
minHeight:'100vh', 
backgroundImage: `url(${process.env.PUBLIC_URL + VRBO})`,  //Need to move public file!!
backgroundPosition: 'center center', 
backgroundSize: 'cover', 
backgroundRepeat: 'no-repeat'


}

}));


export default function Bio(){

const classes= useStyles();

  return(


  <div className={classes.root}>
  

  </div>

  

  )
}


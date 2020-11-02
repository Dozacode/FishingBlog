import React from 'react';
import { AppBar, Collapse, IconButton, Toolbar,Button, Menu, MenuItem } from '@material-ui/core';
import  SortIcon  from '@material-ui/icons/Sort';
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import { BuildOutlined } from '@material-ui/icons';
import Bio from '../pages/Bio';
import Blog from './blog';
import Store from '../pages/Store';

const useStyles = makeStyles((theme) => ({
  ibutton:{                                 
    color:'#07351A',
    textAlign:'center',
    fontSize:'2rem',

 },
 menuitem:{                                 
  color:'#07351A',
  textAlign:'center',
  background:'transparent',
 }

 
 }));
 
 

export default function SimpleMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

 const handleClose = () => {
  setAnchorEl(null);
  };

  return (
    <div>
     <Router>
     
      <IconButton>
        <SortIcon className={classes.ibutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></SortIcon>
      </IconButton>
    
      <Menu
          id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuitem} ><Link className={classes.menuitem} exact path to='/404'>Bio</Link>      </MenuItem>
        <MenuItem className={classes.menuitem} > <Link className={classes.menuitem} to='/blog'>Blog</Link> </MenuItem>
        <MenuItem className={classes.menuitem} ><Link className={classes.menuitem} to='/store'>Store</Link> </MenuItem>
          </Menu>
          
          <Switch>
          <Route exact path = '/bio'  component={Bio}></Route> 
          <Route exact path = '/blog' component={Blog}></Route>
          <Route exact path = '/store' component={Store}> </Route>  
          
          </Switch>
          </Router>
    </div>
  );
}

//if this fails, capitalize the route path var
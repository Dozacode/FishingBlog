import React, { useEffect, useState } from 'react';
import { AppBar, Collapse, IconButton, Toolbar,Button, Menu, MenuItem } from '@material-ui/core';
import  SortIcon  from '@material-ui/icons/Sort';
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import SimpleMenu from './dropdown';

const useStyles = makeStyles((theme) => ({
 root:{                                 //firsdiv
        display: 'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily:'Nunito',
        fontSize:'1rem'
},
maintext:{                              //h1
    color:'white',
    fontSize:'3rem',

},
menu:{                              //h1
    textAlign:'right',
},
arrowdown:{
      color:'07351A',
      fontSize:'4rem',      

},
container:{                             //2ndiv
    textAlign:'center'
},
title:{
    color:'#fff',
},
    appbar:{
        background: 'none',
      
},
icon:{

        color:'#07351A',
        textAlign:'center',
        fontSize:'2rem',
},
titlebarr:{
        flexGrow:'1',
        textAlign:'left',


},
toolbarr:{
    width:'80%',
    margine:'0 auto',

},
spann:{
    color:'#07351A',
}
 

}));





export default function Header() {

    const classes = useStyles();
    
    const [checked,setChecked] = useState(false);  //sets f
   
    useEffect(()=>{
        setChecked(true);
    },[])
    

  
    return (
        
        <div className={classes.root}>
            <h1 className={classes.title}>      </h1>
            
           <AppBar className={classes.appbar} elevation={0}>  
           <Toolbar className={classes.toolbarr}>

            <h1 className={classes.titlebarr}>Kayak<span className={classes.spann}>Fishing</span></h1>
            <SimpleMenu className={classes.menu}/>
     
           </Toolbar>
           </AppBar>
            <Collapse in={checked}
             {...(checked ? { timeout: 2000 } : {}  )} 
             collapsedHeight={50}>

           <div className={classes.container}>
           <h1 className={classes.maintext}>Technical<span className={classes.spann}>Fishing</span></h1>
            <IconButton>     
            <KeyboardArrowDownIcon className={classes.arrowdown}/>  
            
            
             </IconButton>

           </div>
           </Collapse>
        </div>
    );
}

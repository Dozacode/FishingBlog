import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from './imagecard';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
root:{
    minheight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}

}));

export default function Blog() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        
        <div className={classes.root}>
     <Grow
  in={checked}
          style={{ transformOrigin: '0 3 0' }}
          {...(checked ? { timeout: 9000 } : {})}
        >
            <ImageCard />
            </Grow>
        </div>
    );
}

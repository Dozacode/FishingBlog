import React,{useEffect, useState } from 'react';
import firebasee from './firebase.js'



export const AutoContext = React.createContext();

export const AuthProvider = ({children}) => {

const [currentUSe, setCurrentUser ] = useState (null);

useEffect(() => {

app.auth().onAuthStateChanged(setCurrentUser);

},[]);

return(
<AuthContext.AuthProvider 


)



}
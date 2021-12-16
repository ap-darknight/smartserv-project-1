import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import User from './user/user'

const Main = () => {
    return (
        <div style={{fontFamily: 'Josefin Sans, sans-serif'}}>  
            <User/>
        </div>
    );
}

export default Main;
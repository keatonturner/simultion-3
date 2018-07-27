import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import Post from './components/post/Post';
import Form from './components/form/Form';




export default (
    
<Switch>
    <Route exact path='/' component={Auth} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/post/:postid' component={Post} />
    <Route exact path='/new' component={Form} />
</Switch>
        
   
)
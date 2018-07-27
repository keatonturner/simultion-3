import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


function Nav(props){
    const {location} = props;
    if(location.pathname === '/'){
        return ''
    }else {

    return(
        <div>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>new post</Link>
        <Link to='/'><button>logout</button></Link>
        </div>
    )
}
}
export default withRouter(Nav);
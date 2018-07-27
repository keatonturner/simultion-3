import React, {Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {register} from './../../ducks/reducer';



 class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.register = this.register(this);
    }
    

    handleChangeUserName(username){
        this.setState({
            username: username
           
        })
    }
    handleChangePassword(password){
        this.setState({password: password})
    }
        


    register(){
        const {username, password} = this.state;
        axios.post('/api/auth/register').then(res => {
            this.setState({username: e.target.value, password: e.target.value})
        })
    }

    render(){
        return(
            <form>
            <h1>Helo</h1>
                <ul>
                    Username: <input type='text' onChange={ handleChangeUserName}/>
                </ul>
                <ul>
                    Password: <input type='text' onChange={handleChangePassword}/>        
                </ul>
                    <button>Login</button>
                    <button onClick={() => this.register()}>Register</button>
            </form>
        )
    }
}
mapStateToProps(state){
    return {
        register: state.obj
    }

}


export default connect(mapStateToProps, {register})(Auth);
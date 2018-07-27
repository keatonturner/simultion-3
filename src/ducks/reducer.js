import axios from 'axios';


const initialState = {
    username: '',
    profile: '',
    userId: 0
}


const UPDATE_USER_INFO = 'UPDATE_USER_INFO'




export default function reducer(state=initialState, action){
let {payload} = action;
switch(action.type){
    case UPDATE_USER_INFO:
    return Object.assign({}, state, {username: payload.username, profile: payload.profile_pic, userId: payload.userId})

default:
return state;
}
}



export function register(obj, history){
    return{
        type: UPDATE_USER_INFO,
        payload: axios.post('/api/register', obj).then(res => {
            history.push('/dashboard');
            return res.data;
        })
    }
}






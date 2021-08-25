import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import gym from './gymReducer'
import profile from './profileReducer'
 


export default combineReducers({
    auth,
    alert,
    gym,
    profile
     
    
})
import {combineReducers} from 'redux'
import SayHelloReducer from './SayHelloReducer'
import CakeReducer from './CakeReducer'
import CommentsReducer from './CommentsReducer'

export default combineReducers ({
    SayHelloReducer,
    CakeReducer,
    CommentsReducer
})
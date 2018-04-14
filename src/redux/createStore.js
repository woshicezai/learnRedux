import {createStore} from 'redux'
import {UncleReducer} from "./reduce/index";

export const createStoreFn=(initState)=>{
 return  createStore(UncleReducer,initState)
}


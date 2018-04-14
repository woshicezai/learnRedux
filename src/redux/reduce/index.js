import {UNCLE_SEND_MONEY} from "../action/index";

let initState={
   money:0,
}

export const UncleReducer = function(state=initState, action){
  switch (action.type) {
    case UNCLE_SEND_MONEY:
       return Object.assign({},state,{money:action.money})
    default:
      return state;
  }
};
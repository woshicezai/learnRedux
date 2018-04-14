import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Root} from "./src/index";
import {createStoreFn} from "./src/redux/createStore";
import {Provider} from 'react-redux'

let store=createStoreFn();

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
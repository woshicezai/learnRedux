import React,{Component} from 'react'
import './button.css'

export default class Button extends Component{
  constructor(props){
    super(props)

  }

  componentWillReceiveProps(nextProps){

  }

  shouldComponentUpdate(nextProps){

  }

  click=()=>{
    this.props.onClick()
  }

  render(){
    return(
      <div className="container3" onClick={this.click}>
        <span>{this.props.text}</span>
      </div>
    )
  }
}


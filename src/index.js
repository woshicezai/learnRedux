import React,{Component} from 'react'
import Parent from './Page/Parent/parent'
import Uncle from './Page/Uncle/uncle'



export class Root extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div style={{display:'flex',flexDirection:'row',width:530,justifyContent:"space-between"}}>
        <Parent/>
        <Uncle/>
      </div>
    )
  }
}

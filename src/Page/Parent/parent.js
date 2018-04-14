import React,{Component} from 'react'
import Son from '../Son/Son.js'
import Button from '../Button/button'

export default class Parent extends Component{
  constructor(props){
    super(props)
    this.state={
      money1:0,
      money2:0,
    }
  }

  componentWillMount(){
    console.log('Parent componentWillMount')
  }
  componentDidMount(){
    console.log('Parent  componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Parent componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Parent shouldComponentUpdate')
    return true
  }


  /***
   * 在这个函数里面，你就不能使用 this.setState 来修改状态,
   * 这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中
   */
  componentWillUpdate(nextProps,nextState){
    console.log('Parent  componentWillUpdate')
  }

  componentDidUpdate(prevProps,prevState){
    console.log('Parent  componentDidUpdate')
  }


  render(){
    console.log('Parent render')
    return(
      <div style={this.getStyle()}>
        <Button
          text="发钱啦"
          onClick={()=>this.setState({
          money1:1,
          money2:1,
        })}/>
        <div style={{display: 'flex',flexDirection:'row',marginTop:20}}>
          <Son money={this.state.money1}/>
          <Son money={this.state.money2}/>
        </div>
      </div>
    )
  }

  getStyle = ()=>{
    return  Object.assign({},styles.container,{
      backgroundColor:this.state.backgroundColor
    })
  }
}

const styles={
  container:{
    display: 'flex',
    flexDirection:'column',
    width:300,
    height:300,
    border:'1px solid red',
    justifyContent: 'center',
    alignItems: 'center',
}
}

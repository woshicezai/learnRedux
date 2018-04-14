import React,{Component} from 'react'
import Son from '../Son/Son.js'
import Button from '../Button/button'

export default class Uncle extends Component{
  constructor(props){
    super(props)
    this.state={
      money1:0,
      money2:0,
    }
  }

  componentWillMount(){
    console.log('Uncle componentWillMount')
  }
  componentDidMount(){
    console.log('Uncle  componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Uncle componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Uncle shouldComponentUpdate')
    return true
  }


  /***
   * 在这个函数里面，你就不能使用 this.setState 来修改状态,
   * 这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中
   */
  componentWillUpdate(nextProps,nextState){
    console.log('Uncle  componentWillUpdate')
  }

  componentDidUpdate(prevProps,prevState){
    console.log('Uncle  componentDidUpdate')
  }


  render(){
    console.log('Uncle render')
    return(
      <div style={styles.container}>
        <Button
          text="来 叔叔给你钱"
          onClick={()=>this.setState({
            money1:2,
            money2:2,
        })}/>
      </div>
    )
  }

}

const styles={
  container:{
    display: 'flex',
    flexDirection:'column',
    width:200,
    height:200,
    border:'1px solid green',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

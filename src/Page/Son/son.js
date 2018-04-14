import React,{Component} from 'react'
import './son.css'
import {connect}  from 'react-redux'


class Son extends Component{
  constructor(props){
    super(props)
    this.state={
      money:10
    }
  }
  componentWillMount(){
    console.log('Son componentWillMount')
  }
  componentDidMount(){
    console.log('Son  componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('Son componentWillReceiveProps',{
      nextProps,
    });
    //dad
    if(this.props.money!==nextProps.money){
      this.setState({
        money:this.state.money+nextProps.money
      })
    }
    //redux
    if (this.props.uncleMoney !== nextProps.uncleMoney){
      this.setState({
        money:this.state.money+nextProps.uncleMoney
      })
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Son shouldComponentUpdate',{
      nextProps,
      nextState,
    })
    return true
  }

  /***
   * 在这个函数里面，你就不能使用 this.setState 来修改状态,
   * 这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中
   */
  componentWillUpdate(nextProps,nextState){
    console.log('Son  componentWillUpdate',{
      nextProps,
      nextState,
    })
  }

  componentDidUpdate(prevProps,prevState){
    console.log('Son  componentDidUpdate',{
      prevProps,
      prevState,
    })
  }

  render(){
    console.log('Son render',{
      props:this.props,
      state:this.state
    })
    return(
      <div className="container2">
        <span>{this.state.money}</span>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

  }
}

const mapStateToProps=(state)=>{
  console.log('son mapStateToProps',state)
  return {
    uncleMoney:state.money
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Son)

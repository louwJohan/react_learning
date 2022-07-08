import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log('Constructor')
    super(props)
  
    this.state = {
      data: 'Loading'
    }
  }

  getData() {
    console.log('getData(), called')
    setTimeout(()=>{
      console.log('Data fetched')
      this.setState({
        data:'Loaded'
      })
      }, 3000)
    }
  
  componentDidMount(){
    console.log('Component mounted')
    this.getData()
  }

  render() {
    console.log('render method called')
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default LifeCyclesCDM
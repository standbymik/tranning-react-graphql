import React, { Component } from 'react'

export default class Lifecycle extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            a:1,...props
        }
    }
    

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState)
        console.log('nextProps', nextProps)
        console.log('prevState', prevState)
        return {
            nextProps,
            prevState
        }
    }
    
    componentDidMount() { 
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        return true
    }

    getSnapshotBeforeUpdate() { 
        console.log('getSnapshotBeforeUpdate')
        return 'mysnap'
    }

    componentDidUpdate(prevProps,prevState,snapshot) { 
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('snapshot',snapshot)
    }
    

    render() {
        console.log('render',this.props,this.state)
        return (
            <div>
                <h1>Lifecycle</h1>
            </div>
        )
  }
}

import React, { Component } from 'react'
import CounterControl from './CounterControl'
import MulitplyDisplay from './MulitplyDisplay';
import PowerDisplay from './PowerDisplay';
import Lifecycle from './Lifecycle';
export default class Counter extends Component {

    state = {
        counter: 100, power: 2
    }

    onAddCounter = () =>{
        this.setState({ counter: this.state.counter + 1 })
        
    }
    
    onMinusCounter = () =>{
        this.setState({ counter: this.state.counter - 1 })
        
    }

    onResetCOunter = () =>{
        this.setState({counter : 0})
    }

    onAddPower = () =>{
        this.setState({ power: this.state.power + 1 })
        
    }
    
    onMinusPower = () =>{
        this.setState({ power: this.state.power - 1 })
        
    }

    onResetPower = () =>{
        this.setState({ power: 1 })
        
    }


    render() {
        return (
            <React.Fragment>
                <h1>counter</h1>
                <h1>n: {this.state.counter}</h1>
                <MulitplyDisplay
                    number={this.state.counter}
                    multiplier={this.state.power} />
                <PowerDisplay
                    base={this.state.counter}
                    exponent={this.state.power}/>
                <CounterControl
                    onAdd={this.onAddCounter}
                    onMinus={this.onMinusCounter}
                    onReset={this.onResetCOunter}/>
                <CounterControl
                    onAdd={this.onAddPower}
                    onMinus={this.onMinusPower}
                    onReset={this.onResetPower} />
                <Lifecycle number={this.state.counter}/>
            </React.Fragment>
        )
    }
}

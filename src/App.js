import React, { Component } from 'react'
import * as actions from './store/actions'
import { connect } from 'react-redux'
import './App.css'
class App extends Component {
    render() {
        return (
            <div className="App">
                <h3>The count is: {this.props.count}</h3>
                <button onClick={this.props.addCount}>Add</button>
                <button onClick={this.props.subtractCount}>Subtract</button>
                <button onClick={this.props.resetCount}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    addCount: actions.add,
    subtractCount: actions.subtract,
    resetCount: actions.reset
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

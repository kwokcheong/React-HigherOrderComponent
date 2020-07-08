import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component{


    render(){
        //we will recieve the props using this.props, destructure the props 
        
        const {count, incrementCount} = this.props

        return(
            <div>
                <h1>Click Counter</h1>
                <button onClick={incrementCount}> Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter);
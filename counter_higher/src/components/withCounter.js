//Higher Order Component
// const Ironman = withSuit(TonyStark)

import React, {Component} from 'react';

//This higher order component takes in an original component as parameter
const UpdatedComponent = (OriginalComponent) =>{
    //A HOC returns a new component!
    class NewComponent extends Component{

        //Common functionality
        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () =>{
            this.setState(prevState =>{
                return {count: prevState.count + 1}
            })
        }
        render(){
            //the functions and state variable are passed as props!
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
        }
    }
    //takes in the original component and return a new component
    return NewComponent
}

export default UpdatedComponent;
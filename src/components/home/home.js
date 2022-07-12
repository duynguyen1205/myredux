import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fc_increment,fc_decrement, fc_divide, fc_double} from '../actions'
export class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.props.Divide()}>Divide (/2)</button>
                <button onClick={()=>this.props.Decrement()}>Decrement</button>
                <button onClick={()=>this.props.Increment()}>Increment</button>
                <button onClick={()=>this.props.Double()}>Double(*2)</button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
      Increment: () => dispatch(fc_increment()),
      Decrement: () => dispatch(fc_decrement()),
      Divide: () => dispatch(fc_divide()),
      Double: () => dispatch(fc_double()),
    };
  }
export default connect(null,mapDispatchToProps)(Home)
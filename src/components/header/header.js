import React, { Component } from 'react'
import {connect} from  'react-redux'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
componentDidMount(){
        console.log(this.props.count)
    }
render() {
        const {count} = this.props.count;
        const {clicked} = this.props.clicked;
        return (
            <div className="header">
                <h2>Count : {count}</h2>
                <h1>Your Clicked: {clicked}</h1>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { count: state.dataApp, clicked: state.dataApp, };
};

export default connect(mapStateToProps,null)(Header);

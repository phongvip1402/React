import { Component } from 'react';
export default class AddComponent extends Component {
    render() {
        return (
            <h1>Total : {this.props.firstNumber + this.props.secoundNumber }</h1>
        );
    }
}
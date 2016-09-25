import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                React Blog - Udemy
                { this.props.children }
            </div>
    );
    }
}

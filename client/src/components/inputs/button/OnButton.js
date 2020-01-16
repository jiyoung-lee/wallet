import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class OnButton extends Component {
    render() {
        const sty = {
            fontSize: 15,
            color: '#795548'
        }
        return (
            <Button onClick={this.props.click} style={sty}>{this.props.name}</Button>
        );
    }
}

export default OnButton;
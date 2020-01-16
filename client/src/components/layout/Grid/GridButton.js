import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class GridButton extends Component {
    render() {
        const styled = {
            textDecoration: 'none',
            color: '#795548',
            fontSize: 15
        }
        return (
            <Button>
                <Link to={this.props.link} variant="body2" style={styled}>{this.props.name}</Link>
            </Button>
        );
    }
}

export default GridButton;
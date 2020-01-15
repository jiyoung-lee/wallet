import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Base extends Component {
    render() {
        const submit = {
            margin: (3, 0, 2),
            marginBottom: 10
        }
        return (
            <Button
                type="button"
                fullWidth
                variant="contained"
                style={submit}
                onClick={this.props.click}
                color="primary"
            >
                {this.props.name}
            </Button>
        );
    }
}

export default Base;
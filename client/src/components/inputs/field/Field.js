import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Field extends Component {
    render() {
        return (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={this.props.label}
              type={this.props.type}
              onChange={this.props.change}
            />
        );
    }
}

export default Field;
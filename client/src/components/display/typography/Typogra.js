import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Typogra extends Component {
    render() {
        return (
            <Typography component="h1" variant="h5">
                {this.props.name}
            </Typography>
        );
    }
}

export default Typogra;
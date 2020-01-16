import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class GridLink extends Component {
    render() {
        const styled = {
            textDecoration: 'none',
            color: '#3F51B5',
            fontSize: 15
        }
        return (
            <Grid container>
                <Grid item>
                    <Link to={this.props.link} variant="body2" style={styled}>{this.props.name}</Link>
                </Grid>
            </Grid>
        );
    }
}

export default GridLink;
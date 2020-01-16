import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class IndexLink extends Component {
    render() {
        const styled = {
            textDecoration: 'none',
            color: '#3F51B5',
            fontSize: 15
        }
        return (
            <Grid container>
              <Grid item xs>
                <Link to={this.props.link1} variant="body2" style={styled}>{this.props.name1}</Link>
              </Grid>
              <Grid item>
                <Link to={this.props.link2} variant="body2" style={styled}>{this.props.name2}</Link>
              </Grid>
            </Grid>
        );
    }
}

export default IndexLink;
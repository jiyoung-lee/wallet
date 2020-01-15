import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Icon } from 'semantic-ui-react';

class Avatars extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
          }
        return (
            <Avatar style={avatar}>
                <Icon name={this.props.icon}/>
            </Avatar>
        );
    }
}

export default Avatars;
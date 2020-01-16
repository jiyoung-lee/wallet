import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class KeyAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        return (
            <Avatar style={avatar}>
                <VpnKeyIcon />
            </Avatar>
        );
    }
}

export default KeyAvatar;
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class LockAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        return (
            <Avatar style={avatar}>
                <LockOutlinedIcon />
            </Avatar>
        );
    }
}

export default LockAvatar;
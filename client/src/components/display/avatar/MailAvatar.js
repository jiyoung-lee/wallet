import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class MailAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        return (
            <Avatar style={avatar}>
                <MailOutlineIcon />
            </Avatar>
        );
    }
}

export default MailAvatar;
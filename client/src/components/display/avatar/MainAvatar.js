import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class MainAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        const mailAvatar = (
            <MailOutlineIcon />
        );
        const keyAvatar = (
            <VpnKeyIcon />
        );
        return (
            <Avatar style={avatar}>
                {this.props.main ? mailAvatar : keyAvatar}
            </Avatar>
        );
    }
}

export default MainAvatar;
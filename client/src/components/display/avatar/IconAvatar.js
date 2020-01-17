import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class IconAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        const removeAvatar = (
            <RemoveCircleOutlineIcon />
        );
        const lockAvatar = (
            <LockOutlinedIcon />
        );
        return (
            <Avatar style={avatar}>
                {this.props.mode ? lockAvatar : removeAvatar}
            </Avatar>
        );
    }
}

export default IconAvatar;
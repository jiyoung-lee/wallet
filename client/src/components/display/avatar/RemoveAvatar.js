import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class RemoveAvatar extends Component {
    render() {
        const avatar = {
            marginBottom: 8,
            backgroundColor: '#3F51B5'
        }
        return (
            <Avatar style={avatar}>
                <RemoveCircleOutlineIcon />
            </Avatar>
        );
    }
}

export default RemoveAvatar;
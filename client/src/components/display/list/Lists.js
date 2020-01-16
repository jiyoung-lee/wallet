import React, { Component } from 'react';
import copy from "copy-to-clipboard";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GridButton from '../../layout/Grid/GridButton';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
        this.state = {
            mypage: { userId: '', public_key: '', balance: '', txhash_list: [] },
            btnText: 'Copy to Clipboard'
        };
    }
    handleCopy() {
        copy(this.state.mypage.public_key);
        this.setState({ btnText: "Copied!" });
    }

    componentDidMount() {
        fetch('/main', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(mypage => this.setState({ mypage }));
    }

    render() {
        const sty = {
            textDecoration: 'none',
            color: '#dc99a3'
        }
        const bt = {
            color: '#795548'
        }
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                            <PermIdentityIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.state.mypage.userId} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <VpnKeyIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.state.mypage.public_key} />
                        <Button style={bt} onClick={this.handleCopy} disabled={this.state.btnText === "Copied!"}>
                            {this.state.btnText}
                        </Button>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <AccountBalanceIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.state.mypage.balance + " ETH"} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="txList" />
                        <GridButton link="/txlist" name="More" />
                    </ListItem>

                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folder">
                    {this.state.mypage.txhash_list.map(list => (
                        <ListItem key={list}>
                            <ListItemText>
                                <a style={sty} href={"https://ropsten.etherscan.io/tx/" + list}>
                                    {list}
                                </a>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default Lists;
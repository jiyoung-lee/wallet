import React, { Component } from 'react';
import axios from 'axios';
import copy from "copy-to-clipboard";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Papere, Form} from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';

class Main extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.getEther = this.getEther.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.state = {
            mypage: { userId: '', public_key: '', balance: '', txhash_list: [] },
            result: '',
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
    logOut() {
        axios
            .get('/main/session_destroy')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err);
            });
    }
    getEther() {
        axios
            .post('https://faucet.metamask.io/',
                this.state.mypage.public_key
            )
            .then(res => {
                if (res.status === 200) {
                    alert('request 1 ether from faucet')
                }
                axios
                    .post('/main/deposit', {
                        result: res.data
                    })
            })
            .catch(error => {
                if (error.response.status === 429) {
                    alert('Too many request')
                }
                else if (error.response.status === 500) {
                    alert('Fauset ServerError')
                }
                else if (error.response.status === 504) {
                    alert('Gateway Timeout')
                }
                console.log(error);
            });
    }

    render() {
        const sty = {
            textDecoration: 'none',
            color: '#dc99a3'
        }
        const bt = {
            color: '#795548'
        }
        const root = {
            maxWidth: 700
        }
        return (
            <Container component="main">
                <Papere>
                    <Name name="EtherWallet" />
                    <Form style={root}>
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
                        <Divider />
                        <Grid container>
                            <Grid item>
                                <Button style={bt} onClick={this.logOut}>logOut</Button>
                                <Button style={bt} onClick={this.getEther}>getEther</Button>
                                <GridButton link="/privatekey" name="Privatekey" />
                                <GridButton link="/send" name="Send" />
                                <GridButton link="/signout" name="Deactivate" />
                            </Grid>
                        </Grid>
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Main;
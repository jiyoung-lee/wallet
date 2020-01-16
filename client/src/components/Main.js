import React, { Component } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Papere, MainForm } from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import Lists from './display/list/Lists'
import OnButton from './inputs/button/OnButton';

class Main extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.getEther = this.getEther.bind(this);
        this.state = {
            mypage: {public_key: ''},
            result: ''
        };
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
        return (
            <Container component="main">
                <Papere>
                    <Name name="EtherWallet" />
                    <MainForm>
                        <Lists />
                        <Divider />
                        <Grid container>
                            <Grid item>
                                <OnButton click={this.logOut} name="logOut" />
                                <OnButton click={this.getEther} name="getEther" />
                                <GridButton link="/privatekey" name="Privatekey" />
                                <GridButton link="/send" name="Send" />
                                <GridButton link="/signout" name="Deactivate" />
                            </Grid>
                        </Grid>
                    </MainForm>
                </Papere>
            </Container>
        );
    }
}

export default Main;
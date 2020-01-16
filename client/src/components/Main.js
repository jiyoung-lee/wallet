import React, { Component } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Papere, Form } from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import Lists from './display/list/Lists'

class Main extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.getEther = this.getEther.bind(this);
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
                        <Lists />
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
import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Papere, Form } from './reusuable/Form';
import SplitButton from './inputs/button/SplitButton';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import UserTable from './display/table/UserTable';

class Uinfo extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        axios
            .get('/uinfo/session_destroy')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const sty = {
            fontSize: 15,
            color: '#795548'
        }
        const button = {
            marginBottom: 5
        }
        return (
            <Container component="main">
                <Papere>
                    <Name name="User Information" />
                    <Form>
                        <Grid container>
                            <Grid item xs style={button}>
                                <GridButton link="/usertx" name="User Tx" />
                                <GridButton link="/userout" name="User Dropout" />
                                <Button onClick={this.logOut} style={sty}>logOut</Button>
                            </Grid>
                            <Grid item>
                                <SplitButton />
                            </Grid>
                        </Grid>
                        <UserTable />
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Uinfo;
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Papere, Form } from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import UserTxTable from './display/table/UserTxTable';

class Usertx extends Component {
    render() {
        const button = {
            marginBottom: 5,
        }
        return (
            <Container component="main">
                <Papere>
                    <Name name="User Transactions" />
                    <Form>
                        <Grid container>
                            <Grid item style={button}>
                                <GridButton link="/uinfo" name="Home" />
                            </Grid>
                        </Grid>
                        <UserTxTable />
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Usertx;
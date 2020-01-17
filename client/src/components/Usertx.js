import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Papere, Form } from './reusuable/Styled';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import UserTxTable from './display/table/UserTxTable';

class Usertx extends Component {
    render() {
        return (
            <Container component="main">
                <Papere>
                    <Name name="User Transactions" />
                    <Form>
                        <Grid container>
                            <Grid item>
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
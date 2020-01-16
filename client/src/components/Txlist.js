import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Papere, Form } from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import TxTable from './display/table/TxTable';

class Txlist extends Component {
    render() {
        return (
            <Container component="main">
                <Papere>
                    <Name name="Transaction List" />
                    <Form>
                        <Grid container>
                            <Grid item>
                                <GridButton link="/main" name="Home" />
                            </Grid>
                        </Grid>
                        <TxTable />
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Txlist;
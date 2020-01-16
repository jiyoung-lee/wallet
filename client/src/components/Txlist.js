import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Papere, Form } from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';
import TxTable from './display/table/TxTable';

class Txlist extends Component {
    render() {
        const button = {
            marginBottom: 5
        }
        return (
            <Container component="main">
                <Papere>
                    <Name name="Transaction List" />
                    <Form>
                        <Grid container>
                            <Grid item style={button}>
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
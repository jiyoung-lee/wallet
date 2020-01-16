import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { StyledTableCell, StyledTableRow, Papere, Form} from './reusuable/Form';
import Name from './display/typography/Name';
import GridButton from './layout/Grid/GridButton';

class Usertx extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            userTx: { lists: [] }
        };
    }
    componentDidMount() {
        fetch('/usertx', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(userTx => this.setState({ userTx }));
    }
    logOut() {
        axios
            .get('/usertx/session_destroy')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err);
            });
    }
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
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>User Id</StyledTableCell>
                                        <StyledTableCell align="right">Transaction Hash</StyledTableCell>
                                        <StyledTableCell align="right">To Address</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.userTx.lists.map(list => (
                                        <StyledTableRow key={list.userId}>
                                            <StyledTableCell component="th" scope="row">
                                                {list.userId}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {list.txHash}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {list.toAddress}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Usertx;
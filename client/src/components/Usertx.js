import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.div`
    width: 100%;
`

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
        return (
            <Container component="main">
                <Form>
                    <List>
                        <Grid container>
                            <Grid item>
                                <Button>
                                    <Link to="/uinfo" variant="body2">Home</Link>
                                </Button>
                            </Grid>
                        </Grid>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>User Id</StyledTableCell>
                                        <StyledTableCell align="right">User Transactions</StyledTableCell>
                                        <StyledTableCell align="right">User toAddress</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.userTx.lists.map(list => (
                                        <StyledTableRow key={list.userid}>
                                            <StyledTableCell component="th" scope="row">
                                                {list.userid}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {list.txhash}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {list.toAddress}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </List>
                </Form>
            </Container>
        );
    }
}

export default Usertx;
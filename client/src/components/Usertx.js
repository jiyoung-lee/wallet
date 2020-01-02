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

const List = styled.div`
    width: 100%;
    margin: 2rem;
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
            <List>
                <h2>UserTx List</h2>

                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>User Id</StyledTableCell>
                                <StyledTableCell align="right">User Tx</StyledTableCell>                                
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
                <div>
                    <button type="button"><Link to="/uinfo">{'Home'}</Link></button>
                </div>
            </List>
        );
    }
}

export default Usertx;
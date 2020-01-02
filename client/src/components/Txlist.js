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

class Txlist extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            mypage: {lists: []}
        };
    }
    componentDidMount() {
        fetch('/txlist', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(mypage => this.setState({ mypage }));
    }
    logOut() {
        axios
            .get('/txlist/session_destroy')
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
                <h2>Tx List</h2>

                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Transactions Hash</StyledTableCell>
                                <StyledTableCell align="right">To</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.mypage.lists.map(list => (
                                <StyledTableRow key={list.txhash}>
                                    <StyledTableCell component="th" scope="row">
                                        {list.txhash}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{list.toAddress}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <button type="button" onClick={this.logOut} >로그아웃</button>
                    <button type="button"><Link to="/main">{'Home'}</Link></button>
                </div>
            </List>
        );
    }
}

export default Txlist;
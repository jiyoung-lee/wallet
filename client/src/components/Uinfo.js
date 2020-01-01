import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

const Home = styled.div`
    width: 100%;
    margin: 2rem;
`

class Uinfo extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            userpage: { lists: [] }
        };
    }
    componentDidMount() {
        fetch('/uinfo', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(userpage => this.setState({ userpage }));
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

        return (
            <Home>
                <h2>User_info</h2>

                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>User Id</StyledTableCell>
                                <StyledTableCell>Create Date</StyledTableCell>
                                <StyledTableCell>Deleted Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.userpage.lists.map(list => (
                                <StyledTableRow key={list.userid}>
                                    <StyledTableCell component="th" scope="row">
                                        {list.userid}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {list.createDate}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {list.deleteDate}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <button type="button" onClick={this.logOut} >로그아웃</button>
                </div>
            </Home>
        );
    }
}

export default Uinfo;
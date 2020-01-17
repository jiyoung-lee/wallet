import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow } from '../../reusuable/Styled';

class UserTxTable extends Component {
    constructor(props) {
        super(props);
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
    render() {
        return (
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
        );
    }
}

export default UserTxTable;
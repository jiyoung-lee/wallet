import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow } from '../../reusuable/Form';

class UserTable extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Id</StyledTableCell>
                            <StyledTableCell align="center">Create Date</StyledTableCell>
                            <StyledTableCell align="right">Deleted Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.userpage.lists.map(list => (
                            <StyledTableRow key={list.userId}>
                                <StyledTableCell component="th" scope="row">
                                    {list.userId}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {list.createDate}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {list.deleteDate}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default UserTable;
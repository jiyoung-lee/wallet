import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow } from '../../reusuable/Styled';

class TxTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mypage: { lists: [] }
        };
    }
    componentDidMount() {
        fetch('/txlist', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(mypage => this.setState({ mypage }));
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Transaction Hash</StyledTableCell>
                            <StyledTableCell align="right">To Address</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.mypage.lists.map(list => (
                            <StyledTableRow key={list.txHash}>
                                <StyledTableCell component="th" scope="row">
                                    {list.txHash}
                                </StyledTableCell>
                                <StyledTableCell align="right">{list.toAddress}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TxTable;
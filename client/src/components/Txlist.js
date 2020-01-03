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

class Txlist extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
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
            <Container component="main">
                <Form>
                    <List>
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
                        <Grid container>
                            <Grid item>
                                <Button>
                                    <Link to="/main" variant="body2">Home</Link>
                                </Button>
                                <Button onClick={this.logOut}>logOut</Button>
                            </Grid>
                        </Grid>
                    </List>
                </Form>
            </Container>
        );
    }
}

export default Txlist;
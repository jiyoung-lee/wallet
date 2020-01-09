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
        backgroundColor: '#424242',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#e0e0e0'
        },
    },
}))(TableRow);

const Papere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div` 
  margin-bottom: 1rem;
`
const Form = styled.div`
    width: 100%;
    margin-bottom: 3rem;
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
        const styled = {
            textDecoration: 'none',
            color: '#212121',
            fontSize: 15
        }
        const button = {
            marginBottom: 5,
        }
        const tit = {
            color: '#4e342e'
        }
        return (
            <Container component="main">
                <Papere>
                    <Title style={tit}>
                        <h1>User Transactions</h1>
                    </Title>
                    <Form>
                        <Grid container>
                            <Grid item style={button}>
                                <Button>
                                    <Link to="/uinfo" variant="body2" style={styled}>Home</Link>
                                </Button>
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
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Usertx;
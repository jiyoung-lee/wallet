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
        const styled = {
            textDecoration: 'none',
            color: '#212121',
            fontSize: 15
        }
        const sty = {
            fontSize: 15,
            color: '#212121'
        }
        const button = {
            marginBottom: 5
        }
        const tit = {
            color: '#4e342e'
        }
        return (
            <Container component="main">
                <Papere>
                    <Title style={tit}>
                        <h1>User Information</h1>
                    </Title>
                    <Form>
                        <Grid container>
                            <Grid item style={button}>
                                <Button>
                                    <Link to="/usertx" variant="body2" style={styled}>User Tx</Link>
                                </Button>
                                <Button>
                                    <Link to="/userout" variant="body2" style={styled}>User Dropout</Link>
                                </Button>
                                <Button onClick={this.logOut} style={sty}>logOut</Button>
                            </Grid>
                        </Grid>
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
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Uinfo;
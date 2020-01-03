import React, { Component } from 'react';
import styled from 'styled-components';
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
`

class Txlist extends Component {
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
        const styled = {
            textDecoration: 'none',
            color: '#212121',
            fontSize: 15
        }

        return (
            <Container component="main">
                <Papere>
                    <Title>
                        <h1>EtherWallet</h1>
                    </Title>
                    <Form>
                        <Grid container>
                            <Grid item>
                                <Button>
                                    <Link to="/main" variant="body2" style={styled}>Home</Link>
                                </Button>
                            </Grid>
                        </Grid>
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
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Txlist;
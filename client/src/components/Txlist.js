import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { StyledTableCell, StyledTableRow, Papere, Form} from './reusuable/Form';
import Name from './display/typography/Name';

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
        const button = {
            marginBottom: 5,
        }
        return (
            <Container component="main">
                <Papere>
                    <Name name="Transaction List" />
                    <Form>
                        <Grid container>
                            <Grid item style={button}>
                                <Button>
                                    <Link to="/main" variant="body2" style={styled}>Home</Link>
                                </Button>
                            </Grid>
                        </Grid>
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
                    </Form>
                </Papere>
            </Container>
        );
    }
}

export default Txlist;
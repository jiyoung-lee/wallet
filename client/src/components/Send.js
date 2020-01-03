import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`
const Form = styled.div`
  width: 100%;
`

class Send extends Component {
  constructor(props) {
    super(props);
    this.Spend = this.Spend.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.state = {
      toAddress: '',
      value: '',
      gasPrice: ''
    };
  }
  Spend() {
    axios
      .post('/send/send_process', {
        toAddress: this.state.toAddress,
        value: this.state.value,
        gasPrice: this.state.gasPrice
      })
      .then(res => {
        if (res.status === 200) {
          alert('보내기 실패!')
        }
        else if (res.status === 201) {
          alert('형식이 올바르지 않습니다.')
        }
        else if (res.status === 203) {
          alert('잔액이 부족합니다.')
        }
        else if (res.status === 202) {
          alert('보내기 성공!')
          window.location.href = '/main'
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleAddressChange(e) {
    this.setState({ toAddress: e.target.value })
  }
  handleValueChange(e) {
    this.setState({ value: e.target.value })
  }
  handleGasChange(e) {
    this.setState({ gasPrice: e.target.value })
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Avatar>
            <MailOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Send
          </Typography>
          <Form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="toAddress"
              label="toAddress"
              name="toAddress"
              type="text"
              onChange={this.handleAddressChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="value"
              label="value"
              name="value"
              type="text"
              onChange={this.handleValueChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="gasPrice"
              label="gasPrice"
              name="gasPrice"
              type="text"
              onChange={this.handleGasChange}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={this.Spend}
              color="primary"
            >
              Send
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/main" variant="body2">Main</Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    );
  }
}

export default Send;
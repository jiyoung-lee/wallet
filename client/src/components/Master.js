import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`
const Form = styled.div`
  width: 100%;
`

class Master extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: ''
    };
  }
  logIn() {
    axios
      .post('/master/master_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
        else if (res.status === 201) {
          alert('Master권한 인증 완료!')
          window.location.href = '/uinfo'
        }
      })
      .catch(error => {
        if (error.response.status === 500) {
          alert('존재하지 않는 회원입니다.')
        }
      });
  }
  handleIdChange(e) {
    this.setState({ id: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Master_Login
          </Typography>
          <Form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userid"
              label="userid"
              name="userid"
              type="text"
              onChange={this.handleIdChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              onChange={this.handlePasswordChange}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={this.logIn}
              color="primary"
            >
              logIn
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">Index</Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    );
  }
}

export default Master;
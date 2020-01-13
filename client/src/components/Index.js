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
const Title = styled.div` 
  margin: 3rem 0;
`
const Form = styled.div`
  width: 100%;
`

class Index extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: ''
    };
  }
  signIn() {
    axios
      .post('/login_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
        else if (res.status === 201) {
          alert('로그인 성공')
          window.location.href = '/main'
        }
      })
      .catch(error => {
        if (error.response.status === 500) {
          alert('존재하지 않는 회원이거나 탈퇴한 회원입니다.')
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
    const avatar = {
      marginBottom: 8,
      backgroundColor: '#3F51B5'
    }
    const styled = {
      textDecoration: 'none',
      color: '#3F51B5',
      fontSize: 15
    }
    const submit = {
      margin: (3, 0, 2),
      marginBottom: 10
    }
    const form = {
      marginTop: 1
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Title />
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Form style={form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="Id"
              name="userId"
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
              style={submit}
              onClick={this.signIn}
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/master" variant="body2" style={styled}>Master</Link>
              </Grid>
              <Grid item>
                <Link to="/create" variant="body2" style={styled}>Sign Up</Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    );
  }
}

export default Index;
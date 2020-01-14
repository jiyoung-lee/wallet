import React, { Component } from 'react';
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
import { Papere, Title, Form } from './reusuable/Form';

class Create extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: ''
    };
  }
  signUp() {
    axios
      .post('/create/create_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 중복')
        }
        else if (res.status === 201) {
          alert('계정생성 완료!')
          window.location.href = '/'
        }
        else if (res.status === 202) {
          alert(res.data.message)
        }
      })
      .catch(err => {
        console.log(err);
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
        <Papere>
          <Title />
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
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
              onClick={this.signUp}
              color="primary"
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2" style={styled}>Index</Link>
              </Grid>
            </Grid>
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Create;
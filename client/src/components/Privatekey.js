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
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ListItemText from '@material-ui/core/ListItemText';

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

class Privatekey extends Component {
  constructor(props) {
    super(props);
    this.Auth = this.Auth.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: '',
      pkey: ''
    };
  }
  Auth() {
    axios
      .post('/privatekey/account', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert("아이디 및 비밀번호를 다시 확인해주세요.")
        }
        else if (res.status === 202) {
          alert('성공')
          this.setState({ pkey: res.data })
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
        <Paper>
          <Title />
          <Avatar style={avatar}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            My Privatekey
          </Typography>
          <ListItemText primary={this.state.pkey} />
          <Form style={form}>
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
              style={submit}
              onClick={this.Auth}
              color="primary"
            >
              Agree
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/main" variant="body2" style={styled}>Main</Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    );
  }
}

export default Privatekey;
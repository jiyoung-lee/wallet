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

class Userout extends Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.state = {
      id: ''
    };
  }
  drop() {
    axios
      .post('/userout/userout_process', {
        id: this.state.id
      })
      .then(res => {
        if (res.status === 200) {
          alert('강퇴시킬 아이디를 다시 확인해주세요.')
        }
        else if (res.status === 202) {
          alert('강퇴 성공!')
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
            User Dropout
          </Typography>
          <Form style={form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userid"
              label="User Id"
              name="userid"
              type="text"
              onChange={this.handleIdChange}
              autoFocus
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              style={submit}
              onClick={this.drop}
              color="primary"
            >
              Agree
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/uinfo" variant="body2" style={styled}>Main</Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    );
  }
}

export default Userout;
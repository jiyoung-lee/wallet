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

const Paper  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`
const Form  = styled.div`
  width: 100%;
`
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
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper>
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Account
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
                  onClick={this.signUp}
                  color="primary"
                >
                  Sign up
                </Button>
                
                <Grid container>
                  <Grid item>
                    <Link to="/" variant="body2">
                      {"Index"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Paper>
          </Container>  
        );
    }
}

export default Create;
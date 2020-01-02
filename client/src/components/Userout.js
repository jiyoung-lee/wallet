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
                    alert('아이디를 다시 확인해주세요.')
                }
                else if (res.status === 201) {
                    alert('정말로 강퇴 하시겠습니까?')
                }
                else if (res.status === 202) {
                    alert('강퇴 성공!')
                    window.location.href = '/uinfo'
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleIdChange(e) {
        this.setState({ id: e.target.value })
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
                User out
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
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={this.drop}
                  color="primary"
                >
                  Agree
                </Button>
                
                <Grid container>
                  <Grid item>
                    <Link to="/uinfo" variant="body2">
                      {"Main"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Paper>
          </Container>
        );
    }
}

export default Userout;
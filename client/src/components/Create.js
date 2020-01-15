import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { Papere, Title, Form } from './reusuable/Form';
import Typogra from './typogra/Typogra'
import Base from './button/BaseButton'
import Field from './field/Field'

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

          <Typogra name="Create Account" />
          
          <Form style={form}>

            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            
            <Base name="Sign up" click={this.signUp} />

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
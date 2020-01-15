import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ListItemText from '@material-ui/core/ListItemText';
import { Papere, Title, Form} from './reusuable/Form';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'

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
    const form = {
      marginTop: 1
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Papere>
          <Title />
          <Avatar style={avatar}>
            <VpnKeyIcon />
          </Avatar>
          <Typogra name="My Privatekey" />
          <ListItemText primary={this.state.pkey} />
          <Form style={form}>

            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            
            <Base name="Agree" click={this.Auth} />

            <Grid container>
              <Grid item>
                <Link to="/main" variant="body2" style={styled}>Main</Link>
              </Grid>
            </Grid>
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Privatekey;
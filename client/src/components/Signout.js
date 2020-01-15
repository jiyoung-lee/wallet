import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Papere, Title, Form} from './reusuable/Form';
import Typogra from './typogra/Typogra'
import Base from './button/BaseButton'
import Field from './field/Field'

class Signout extends Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      id: '',
      password: ''
    };
  }
  drop() {
    axios
      .post('/signout/signout_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 및 비밀번호를 다시 확인해주세요.')
        }
        else if (res.status === 202) {
          alert('탈퇴 성공!')
          window.location.href = '/'
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
            <RemoveCircleOutlineIcon />
          </Avatar>
          <Typogra name="Deactivate" />
          <Form style={form}>

            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            
            <Base name="Deactivate my account" click={this.drop} />
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

export default Signout;
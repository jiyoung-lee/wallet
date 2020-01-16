import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Papere, Title, Form } from './reusuable/Form';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'
import GridLink from './layout/Grid/GridLink'
import RemoveAvatar from './display/avatar/RemoveAvatar'

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
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Papere>
          <Title />
          <RemoveAvatar />
          <Typogra name="Deactivate" />
          <Form>
            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            <Base name="Deactivate my account" click={this.drop} />
            <GridLink link="/main" name="Main" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Signout;
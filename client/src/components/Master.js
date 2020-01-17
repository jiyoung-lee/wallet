import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Papere, Title, Form } from './reusuable/Styled';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'
import GridLink from './layout/Grid/GridLink'
import IconAvatar from './display/avatar/IconAvatar'

class Master extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: ''
    };
  }
  logIn() {
    axios
      .post('/master/master_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
        else if (res.status === 201) {
          alert('Master권한 인증 완료!')
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
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Papere>
          <Title />
          <IconAvatar mode={true} />
          <Typogra name="Master" />
          <Form>
            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            <Base name="logIn" click={this.logIn} />
            <GridLink link="/" name="Index" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Master;
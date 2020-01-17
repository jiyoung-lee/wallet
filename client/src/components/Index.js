import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Papere, Title, Form } from './reusuable/Styled';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'
import IndexLink from './layout/Grid/IndexLink'
import IconAvatar from './display/avatar/IconAvatar'

class Index extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      id: '',
      password: ''
    };
  }
  signIn() {
    axios
      .post('/login_process', {
        id: this.state.id,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
        else if (res.status === 201) {
          alert('로그인 성공')
          window.location.href = '/main'
        }
      })
      .catch(error => {
        if (error.response.status === 500) {
          alert('존재하지 않는 회원이거나 탈퇴한 회원입니다.')
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
          <Typogra name="Sign In" />
          <Form>
            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            <Base name="Sign In" click={this.signIn} />
            <IndexLink link1="/master" name1="Master" link2="/create" name2="Sign Up" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Index;
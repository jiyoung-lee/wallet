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
        <Papere>
          <Title />
          <IconAvatar mode={true}/>
          <Typogra name="Create Account" />
          <Form>
            <Field label="Id" type="text" change={this.handleIdChange} />
            <Field label="password" type="password" change={this.handlePasswordChange} />
            <Base name="Sign up" click={this.signUp} />
            <GridLink link="/" name="Index" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Create;
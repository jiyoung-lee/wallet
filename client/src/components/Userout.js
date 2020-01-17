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
        else if (res.status === 201) {
          alert('이미 강퇴한 회원입니다.')
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
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Papere>
          <Title />
          <IconAvatar mode={false} />
          <Typogra name="User Dropout" />
          <Form>
            <Field label="User Id" type="text" change={this.handleIdChange} />
            <Base name="Agree" click={this.drop} />
            <GridLink link="/uinfo" name="Main" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Userout;
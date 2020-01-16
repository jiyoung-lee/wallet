import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Papere, Title, Form } from './reusuable/Form';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'
import GridLink from './layout/Grid/GridLink'

class Send extends Component {
  constructor(props) {
    super(props);
    this.Spend = this.Spend.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.state = {
      toAddress: '',
      value: '',
      gasPrice: ''
    };
  }
  Spend() {
    axios
      .post('/send/send_process', {
        toAddress: this.state.toAddress,
        value: this.state.value,
        gasPrice: this.state.gasPrice
      })
      .then(res => {
        if (res.status === 200) {
          alert('보내기 실패!')
        }
        else if (res.status === 201) {
          alert('형식이 올바르지 않습니다.')
        }
        else if (res.status === 203) {
          alert('잔액이 부족합니다.')
        }
        else if (res.status === 202) {
          alert('보내기 성공!')
          window.location.href = '/main'
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleAddressChange(e) {
    this.setState({ toAddress: e.target.value })
  }
  handleValueChange(e) {
    this.setState({ value: e.target.value })
  }
  handleGasChange(e) {
    this.setState({ gasPrice: e.target.value })
  }

  render() {
    const avatar = {
      marginBottom: 8,
      backgroundColor: '#3F51B5'
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
            <MailOutlineIcon />
          </Avatar>
          <Typogra name="Send" />
          <Form style={form}>
            <Field label="toAddress" type="text" change={this.handleAddressChange} />
            <Field label="value" type="text" change={this.handleValueChange} />
            <Field label="gasPrice" type="text" change={this.handleGasChange} />
            <Base name="Send" click={this.Spend} />
            <GridLink link="/main" name="Main" />
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Send;
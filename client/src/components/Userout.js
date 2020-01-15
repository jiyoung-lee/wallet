import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Papere, Title, Form} from './reusuable/Form';
import Typogra from './display/typography/Typogra'
import Base from './inputs/button/BaseButton'
import Field from './inputs/field/Field'


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
          <Typogra name="User Dropout" />
          <Form style={form}>

            <Field label="User Id" type="text" change={this.handleIdChange} />

            <Base name="Agree" click={this.drop} />

            <Grid container>
              <Grid item>
                <Link to="/uinfo" variant="body2" style={styled}>Main</Link>
              </Grid>
            </Grid>
          </Form>
        </Papere>
      </Container>
    );
  }
}

export default Userout;
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = styled.div`
    width: 100%;
    text-align: center;
`

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
                else if (res.status === 202) {
                    alert('로그인 성공')
                    window.location.href = '/main'
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
            <Login>
                <div>
                    <h2>Login</h2>
                    <form>
                        <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                        <input type="password" name="pw" placeholder="password" onChange={this.handlePasswordChange} />
                    </form><br/>
                    <div>
                        <button type="button" onClick={this.signIn} >Sign in</button>
                        <button type="button"><Link to="/create">{'Create'}</Link></button>
                    </div>
                </div>
            </Login>
        );
    }
}

export default Index;
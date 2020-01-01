import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signin = styled.div`
    width: 100%;
    text-align: center;
`

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
            <Signin>
                <div>
                    <h2>Master_Login</h2>
                    <form>
                        <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                        <input type="password" name="pw" placeholder="password" onChange={this.handlePasswordChange} />
                    </form><br/>
                    <div>
                        <button type="button" onClick={this.logIn} >logIn</button>
                        <button type="button"><Link to="/">{'Index'}</Link></button>
                    </div>
                </div>
            </Signin>
        );
    }
}

export default Master;
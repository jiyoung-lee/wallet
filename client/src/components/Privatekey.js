import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Key = styled.div`
    width: 100%;
    text-align: center;
`

class Privatekey extends Component {
    constructor(props) {
        super(props);
        this.Auth = this.Auth.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            id: '',
            password: ''
        };
    }
    Auth() {
        axios
            .post('/privatekey/account', {
                id: this.state.id,
                password: this.state.password
            })
            .then(res => {
                if (res.status === 200){
                    alert("아이디 및 비밀번호를 다시 확인해주세요.")
                }
                else if(res.status === 202) {
                    alert('로그인 성공')
                    console.log(res.result)
                    console.log(res.result.privatekey)
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
            <Key>
                <div>
                    <h2>My Privatekey</h2>
                    <form>
                        <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                        <input type="password" name="pw" placeholder="password" onChange={this.handleIdChange} /><br />

                        <button type="button" onClick={this.Auth} >Auth</button>
                    </form>
                    <div>
                        <button type="button"><Link to="/main">{'Main'}</Link></button>
                    </div>
                </div>
            </Key>
        );
    }
}

export default Privatekey;
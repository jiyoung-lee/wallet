import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = styled.div`
    width: 100%;
    margin: 2rem;
`

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
                else if (res.status === 201) {
                    alert('정말로 탈퇴 하시겠습니까?')
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
            <Home>
                <h2>Signout</h2>
                <form>
                    <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                    <input type="password" name="pw" placeholder="password" onChange={this.handlePasswordChange} />
                </form><br/>
                <div>
                    <button type="button" onClick={this.drop} >탈퇴하기</button>
                    <button type="button"><Link to="/main">{'취소하기'}</Link></button>
                </div>
            </Home>
        );
    }
}

export default Signout;
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SingUp = styled.div`
    width: 100%;
    text-align: center;
`
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
            <SingUp>
                <div>
                    <h2>Create Account</h2>
                    <form>
                        <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                        <input type="password" name="pw" placeholder="password" onChange={this.handlePasswordChange} />
                    </form><br />
                    <div>
                        <button type="button" onClick={this.signUp} >Sign up</button>
                        <button type="button"><Link to="/">{'Index'}</Link></button>
                    </div>
                </div>
            </SingUp>
        );
    }
}

export default Create;
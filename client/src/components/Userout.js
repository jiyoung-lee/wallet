import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = styled.div`
    width: 100%;
    margin: 2rem;
`

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
                    alert('아이디를 다시 확인해주세요.')
                }
                else if (res.status === 201) {
                    alert('정말로 강퇴 하시겠습니까?')
                }
                else if (res.status === 202) {
                    alert('강퇴 성공!')
                    window.location.href = '/uinfo'
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleIdChange(e) {
        this.setState({ id: e.target.value })
    }
    render() {

        return (
            <Home>
                <h2>User out</h2>
                <form>
                    <input type="text" name="id" placeholder="userid" onChange={this.handleIdChange} /><br />
                </form><br/>
                <div>
                    <button type="button" onClick={this.drop} >탈퇴하기</button>
                    <button type="button"><Link to="/uinfo">{'취소하기'}</Link></button>
                </div>
            </Home>
        );
    }
}

export default Userout;
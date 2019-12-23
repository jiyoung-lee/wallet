import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = styled.div`
    width: 100%;
    text-align: center;
`

class Main extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.getEther = this.getEther.bind(this);
        this.state = {
            mypage: []
        };
    }
    componentDidMount() {
        fetch('/main', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(mypage => this.setState({ mypage }, () => console.log('mypage fetched...', mypage)));
    }
    logOut() {
        axios
            .get('/main/session_destroy')
            .then(res => {
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err);
            });
    }
    getEther() {
        axios
            .post('https://faucet.metamask.io/', {
                public_key: this.state.mypage.public_key
            })
            .then(res => {
                if(res.status === 202) {
                    axios.post('/main/deposit'),{
                        addr: JSON.stringify(res)
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <Home>
                <h2>MyPage</h2>
                <form>
                    <ul>
                        {this.state.mypage.map(my =>
                            <p>
                                <strong>userid : </strong>{my.userid}<br />
                                <strong>Address : </strong>{my.public_key}<br />
                                <strong>Balance : </strong>{my.balance} ETH<br />
                                <strong>txList : </strong>
                                {my.txhash_list[0]}<br />
                                {my.txhash_list[1]}<br />
                                {my.txhash_list[2]}<br />
                            </p>
                        )}
                    </ul>
                    <button type="button" onClick={this.getEther}>이더 얻기</button>
                </form>
                <div>
                    <button type="button"><Link to="/privatekey">{'Privatekey'}</Link></button>
                    <button type="button"><Link to="/send">{'Send'}</Link></button>
                    <button type="button" onClick={this.logOut} >로그아웃</button>
                </div>
            </Home>
        );
    }
}

export default Main;
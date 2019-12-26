import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import copy from "copy-to-clipboard";
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
        this.handleCopy = this.handleCopy.bind(this);
        this.state = {
            mypage: { userid: '', public_key: '', balance: '', txhash_list: [] },
            result: '',
            btnText: 'Copy to Clipboard'
        };
    }
    handleCopy() {
        copy(this.state.mypage.public_key);
        this.setState({ btnText: "Copied!" });
    }

    componentDidMount() {
        fetch('/main', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(mypage => this.setState({ mypage }));
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
            .post('https://faucet.metamask.io/',
                this.state.mypage.public_key
            )
            .then(res => {
                axios
                    .post('/main/deposit', {
                        result: res.data
                    })

            })
            .catch(error => {
                if (error.response.status === 429) {
                    alert('Too many request')
                }
                else if (error.response.status === 500) {
                    alert('Fauset ServerError')
                }
                console.log(error);
            });

    }
    render() {
        return (
            <Home>
                <h2>MyPage</h2>
                <form>
                    <p>
                        <strong>userid : </strong>{this.state.mypage.userid}<br />
                        <strong>Address : </strong>{this.state.mypage.public_key}
                        <button onClick={this.handleCopy} disabled={this.state.btnText === "Copied!"}>
                            {this.state.btnText}
                        </button><br />
                        <strong>Balance : </strong>{this.state.mypage.balance} ETH<br />
                        <strong>txList : </strong><br />
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[0]}>{this.state.mypage.txhash_list[0]}</a><br />
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[1]}>{this.state.mypage.txhash_list[1]}</a><br />
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[2]}>{this.state.mypage.txhash_list[2]}</a>
                    </p>
                </form><br />
                <div>
                    <button type="button" onClick={this.getEther}>이더 얻기</button>
                    <button type="button" onClick={this.logOut} >로그아웃</button>
                    <button type="button"><Link to="/privatekey">{'Privatekey'}</Link></button>
                    <button type="button"><Link to="/send">{'Send'}</Link></button>
                </div>
            </Home>
        );
    }
}

export default Main;
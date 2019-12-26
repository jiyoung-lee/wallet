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
            mypage: {userid: '', public_key: '', balance:'', txhash_list: []},
            result: ''
        };
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
                console.log('보내긴 함')
                axios
                    .post('/main/deposit', {
                        result: res.data
                    })

            })
            .catch(err => {
                // if (status === 429){
                //     alert('Too many request')
                // }
                // else if(status === 500) {
                //     alert('Fauset ServerError')             
                // }
                console.log(err);
            });

    }
    render() {
        return (
            <Home>
                <h2>MyPage</h2>
                <form>      
                    <p>
                        <strong>userid : </strong>{this.state.mypage.userid}<br />
                        <strong>Address : </strong>{this.state.mypage.public_key}<br />
                        <strong>Balance : </strong>{this.state.mypage.balance} ETH<br />
                        <strong>txList : </strong>
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[0]}>{this.state.mypage.txhash_list[0]}</a><br />
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[1]}>{this.state.mypage.txhash_list[1]}</a><br />
                        <a href={"https://ropsten.etherscan.io/tx/" + this.state.mypage.txhash_list[2]}>{this.state.mypage.txhash_list[2]}</a><br />
                    </p>
                    <button type="button" onClick={this.getEther}>이더 얻기</button>
                    <button type="button" onClick={this.logOut} >로그아웃</button>
                </form>
                <div>
                    <button type="button"><Link to="/privatekey">{'Privatekey'}</Link></button>
                    <button type="button"><Link to="/send">{'Send'}</Link></button>
                </div>
            </Home>
        );
    }
}

export default Main;
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
        // this.state = {
        //     userid: '',
        //     public_key: '',
        //     balance: '',
        //     txhash_list: ''
        // };
    }
    // componentDidMount() {
    //     fetch('/main')
    //       .then(res => res.render())
    //   }
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
    render() {
        return (
            <Home>
                <h2>MyPage</h2>
                <form>
                    <div>
                        userid<br />
                        public_key<br />
                        balance ETH<br />
                        txhash_list<br />

                        {/* {this.state.userid}<br />
                        {this.state.public_key}<br />
                        {this.state.balance} ETH<br />
                        {this.state.txhash_list}<br /> */}
                    </div>
                    <div>
                        <Link to="/deposit"><input type="button" value="이더얻기" /></Link>
                        <button type="button"><Link to="/privatekey">{'Privatekey'}</Link></button>
                        <button type="button"><Link to="/send">{'Send'}</Link></button>
                        <button type="button" onClick={this.logOut} >로그아웃</button>
                    </div>
                </form>
            </Home>
        );
    }
}

export default Main;
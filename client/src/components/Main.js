import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = styled.div`
    width: 100%;
    text-align: center;
`

class Main extends Component {
    render() {
        return (
            <Home>
                <h2>MyPage</h2>
                <form>
                    <div>
                        <p>userid</p>
                        <p>publicKey</p>
                        <p>balance ETH</p>
                        <p>txhash_list</p>
                    </div>
                    <div>
                        <Link to="/deposit">
                            <input type="button" value="이더얻기"></input>
                        </Link>
                        <Link to="/privatekey">
                            <input type="button" value="계정가져오기"></input>
                        </Link>
                        <Link to="/send">
                            <input type="button" value="이더전송"></input>
                        </Link>
                        <Link to="/">
                            <input type="button" value="로그아웃"></input>
                        </Link>
                    </div>
                </form>
            </Home>
        );
    }
}

export default Main;
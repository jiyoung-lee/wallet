import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pass= styled.div`
    width: 100%;
    text-align: center;
`

class Send extends Component {
    render() {
        return (
            <Pass>
                <h2>Send</h2>
                <form>
                    <p><input type="text" name="toAddress" placeholder="받는 계정"></input></p>
                    <p><input type="text" name="value" placeholder="보낼 수량"></input></p>
                    <p><input type="text" name="gasPrice" placeholder="수수료"></input></p>
                    <div>
                        <Link to="/send_process">
                        <input type="button" value="send"></input>
                        </Link>
                        <Link to="/main">
                            <input type="button" value="cancel"></input>
                        </Link>
                    </div>
                </form>
            </Pass>
        );
    }
}

export default Send;
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pass = styled.div`
    width: 100%;
    text-align: center;
`

class Send extends Component {
    constructor(props) {
        super(props);
        this.Spend = this.Spend.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleGasChange = this.handleGasChange.bind(this);
        this.state = {
            toAddress: '',
            value: '',
            gasPrice: ''
        };
    }
    Spend() {
        axios
            .post('/send/send_process', {
                toAddress: this.state.toAddress,
                value: Number(this.state.value),
                gasPrice: Number(this.state.gasPrice)
            })
            .then(res => {
                if (res.status === 200) {
                    alert('보내기 실패!')
                }
                else if (res.status === 201) {
                    alert('형식이 올바르지 않습니다.')
                }
                else if (res.status === 203) {
                    alert('잔액이 부족합니다.')
                }
                else if (res.status === 202) {
                    alert('보내기 성공!')
                    window.location.href = '/main'
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    handleAddressChange(e) {
        this.setState({ toAddress: e.target.value })
    }
    handleValueChange(e) {
        this.setState({ value: e.target.value })
    }
    handleGasChange(e) {
        this.setState({ gasPrice: e.target.value })
    }
    render() {
        return (
            <Pass>
                <div>
                    <h2>Send</h2>
                    <form>
                        <input type="text" name="toAddress" placeholder="받는 계정" onChange={this.handleAddressChange} /><br />
                        <input type="text" name="value" placeholder="보낼 수량" onChange={this.handleValueChange} /><br />
                        <input type="text" name="gasPrice" placeholder="수수료" onChange={this.handleGasChange} /><br />

                        <button type="button" onClick={this.Spend}>Send</button>
                    </form>
                    <div>
                        <button type="button"><Link to="/main">{'Main'}</Link></button>
                    </div>
                </div>
            </Pass>
        );
    }
}

export default Send;
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Key= styled.div`
    width: 100%;
    text-align: center;
`

class Privatekey extends Component {
    render() {
        return (
            <Key>
                <h2>My Privatekey</h2>
                <form>
                    <p><input type="text" name="id" placeholder="userid"></input></p>
                    <p><input type="password" name="pw" placeholder="password"></input></p>
                    <div>
                        <Link to="/privatekey">
                        <input type="button" value="Auth"></input>
                        </Link>
                        <Link to="/main">
                            <input type="button" value="cancel"></input>
                        </Link>
                    </div>
                </form>
            </Key>
        );
    }
}

export default Privatekey;
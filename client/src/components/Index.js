import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = styled.div`
    width: 100%;
    text-align: center;
`

class Index extends Component {
    render() {
        return (
            <Login>
                <h2>Login</h2>
                <form>
                    <p><input type="text" name="id" placeholder="userid"></input></p>
                    <p><input type="password" name="pw" placeholder="password"></input></p>
                    <div>
                        <Link to="/main">
                        <input type="button" value="Login"></input>
                        </Link>
                        <Link to="/create">
                            <input type="button" value="singUp"></input>
                        </Link>
                    </div>
                </form>
            </Login>
        );
    }
}

export default Index;
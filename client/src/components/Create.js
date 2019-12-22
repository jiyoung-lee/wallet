import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingUp = styled.div`
    width: 100%;
    text-align: center;
`
class Create extends Component {
    render() {
        return (
            <SingUp>
                <h2>Create Account</h2>
                <form>
                    <p><input type="text" name="id" placeholder="userid"></input></p>
                    <p><input type="password" name="pw" placeholder="password"></input></p>
                    <div>
                        <Link to="/">
                        <input type="button" value="Home"></input>
                        </Link>
                        <Link to="/create_process">
                            <input type="button" value="SingUp"></input>
                        </Link>
                    </div>
                </form>
            </SingUp>
        );
    }
}

export default Create;
import React, { Component } from 'react';
import styled from "styled-components";

const Name = styled.div` 
  margin-bottom: 1rem;
`;

class Names extends Component {
    render() {
        const tit = {
            color: '#4e342e'
        }
        return (
            <Name style={tit}>
                <h1>{this.props.name}</h1>
            </Name>
        );
    }
}

export default Names;
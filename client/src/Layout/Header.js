import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    border-bottom: 2px solid black;
`
const Search = styled.div`
    width: 100%;
    text-align: center;
`

class Header extends Component {
    render() {
        return (
            <Container>
                <Search>
                    <h1>EtherWallet</h1>
                </Search>
            </Container>
        );
    }
}

export default Header;
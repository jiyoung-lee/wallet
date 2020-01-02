import React, {Component} from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const Paper  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-bottom: 1rem;
`
class Header extends Component {
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Paper>
                    <h1>EtherWallet</h1>    
                </Paper>   
            </Container>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import styled from 'styled-components';
import Router from './Routes/Routes';
import Container from '@material-ui/core/Container';

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Layout>
            <Router />
          </Layout>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Router from './Routes/Routes';
import Add from './components/Add';

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
        <Layout>
          <Header />
          <Router />
        </Layout>
        <Add/>
      </div>
    );
  }
}

export default App;

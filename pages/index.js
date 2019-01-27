import React, { Component } from 'react';
import Layout from '../components/layout';

class IndexPage extends Component {
    
    state = { user: null }
    
    render() {
        return(
        <Layout pageTitle="React simple chat">
        <main>
          <div>
          </div>
        </main>
      </Layout>
      )
    }
}

export default () => (
    <IndexPage />
);
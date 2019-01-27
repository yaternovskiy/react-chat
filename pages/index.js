import React, { Component } from 'react';
import Layout from '../components/layout';

class IndexPage extends Component {
    
    state = { user: null }

    handleKeyUp = evt => {
        if (evt.keyCode === 13) {
          const user =  evt.target.value;
          this.setState({ user });
        }
    }

    render() {
        const { user } = this.state;

        return(
        <Layout pageTitle="React simple chat">
        <main>
          <div>
            <span>
                {
                    user
                        ? (<span>Hello {user}</span> )
                        : `What is your name?`
                }
            </span>
            { !user && <input type="text" onKeyUp={this.handleKeyUp} /> }
          </div>
        </main>
      </Layout>
      )
    }
}

export default () => (
    <IndexPage />
);
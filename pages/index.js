import React, { Component } from 'react';

class IndexPage extends Component {
    
    state = { user: null }
    
    handleKeyUp = evt => {
      if (evt.keyCode === 13) {
        const user =  evt.target.value;
        this.setState({ user });
      }
    }
    
    render() {
        return(<div>Whaa</div>)
    }
}


export default () => (
    <IndexPage />
);
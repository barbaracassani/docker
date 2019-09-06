import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './components/block';

class App extends Component {
  render() {
    return (
      <div className="container h-100">
      <Block title="Register to vote" link="https://www.gov.uk/register-to-vote" imageUrl="/images/register-to-vote.png"/>
      <Block title="Register to vote by post" link="https://www.gov.uk/government/publications/apply-for-a-postal-vote" imageUrl="/images/register-to-vote-by-post.png"/>
      <Block title="Register to vote by proxy" link="https://www.gov.uk/apply-vote-proxy" imageUrl="/images/register-to-vote-by-proxy.png"/>
      </div>
    );
  }
}

export default App;

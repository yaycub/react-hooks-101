import React, { Component } from 'react';
import Quote from '../components/futurama/Quote';
import Button from '../components/futurama/Button';
import { getQuote } from '../services/getQuote';

export default class Futurama extends Component{
  state = { 
    displayQuote: {
      character: '',
      quote: '',
      image: ''
    }
  }

  componentDidMount(){
    this.fetch();
  }

  handleClick = () => {
    this.fetch();
  }

  fetch = () => {
    return getQuote()
      .then(res => this.setState({ displayQuote: res }));
  }

  render(){
    const { displayQuote } = this.state;

    return (
      <>
        <Quote {...displayQuote} />
        <Button onClick={this.handleClick} />
      </>
    );
  }
}

import React, {Component} from 'react';
// import PropTypes from 'prop-types';


function OCCLink(link, label, navigation) {
  class Link extends Component {
    componentWillMount(){
      console.log('componentWillMount')
    }
    componentDidMount(){
      console.log('componentDidMount')
    }
    componentWillUnmount(){
      console.log('componentWillUnmount')
    }
    handleClick = (e) => {
      e.preventDefault();
      navigation.goTo(link);
    };
    render () {
      const element = link.indexOf('://') >0  ? (
        <a target="_blank" rel="noopener noreferrer" href={link}>BBE{label}</a>
      ) : (
        <a href={link} onClick={this.handleClick}>{label}</a>
      );
      return element
    }
  }
  return Link;
}


export default OCCLink;

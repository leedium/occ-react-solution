import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link} from 'react-router-dom';
// import {Provider} from 'react-redux';




const Index = ({pageName}) => (
    <Router>
      <Link to={'/cart'}>{pageName}</Link>
    </Router>
);

Index.propTypes = {
  pageName: PropTypes.string
};
Index.defaultProps = {
  pageName: ''
};

export default Index;



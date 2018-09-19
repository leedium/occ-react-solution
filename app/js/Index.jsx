import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';

import Components from './components/Components';

function Index (props) {
  const OCCLink = Components.OCCLink('cart','Hello',props.occProps.navigation);
  return (
    <Router>
      <OCCLink />
    </Router>
  )
}
Index.propTypes = {
  occProps:PropTypes.shape.isRequired
};

export default Index;



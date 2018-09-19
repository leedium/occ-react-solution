import {Component} from 'react';
import PropTypes from 'prop-types';


class OCCComponent extends Component {
  constructor(props, context){
    super(props, context);
  }
}

OCCComponent.propTypes = {
  occProps:PropTypes.shape.isRequired
};

export default OCCComponent;

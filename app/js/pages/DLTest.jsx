import React from 'react';
import Components from '../components/Components';
import OCCComponent from "../components/OCCComponent";

class DLTest extends OCCComponent {
  constructor (props, context) {
    super(props, context);
    console.log(props)
  }
  render() {
    const OCCLink = Components.OCCLink('/','/');
    return (
      <div>
        <div>DLTest</div>
        <OCCLink />
      </div>
    )
  }
}

export default DLTest;

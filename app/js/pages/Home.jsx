import React from 'react';
import OCCComponent from "../components/OCCComponent";
import Components from "../components/Components";

class Home extends OCCComponent {
  constructor (props) {
    super(props);
    this.test = "test";
  }
  render() {
    const OCCLink = Components.OCCLink('dltest','DLTest');
    return (
      <div>
        <div>Home</div>
        <OCCLink />
      </div>
    )
  }
}

export default Home;

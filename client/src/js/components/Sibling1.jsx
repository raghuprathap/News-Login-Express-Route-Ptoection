
import React from 'react';
import GrandChild from './GrandChild.jsx';


export default class Sibling1 extends React.Component {

  constructor() {
    super();
  }

  render() {
    var newAr = this.props.onData.map(function (e) {
      return <GrandChild sentData={e}/>
    });

    return (
      <div>
        {newAr}
      </div>
    )

  }

}


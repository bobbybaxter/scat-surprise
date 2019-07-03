import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id; // comes from App.js path="/edit/:id"
    return (
      <div className="EditScat col">
        <h1>EditScat</h1>
        <h2>The editId is {editId}</h2>
      </div>
    );
  }
}

export default EditScat;

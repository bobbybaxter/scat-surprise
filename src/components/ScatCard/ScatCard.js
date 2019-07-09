import React from 'react';
import PropTypes from 'prop-types';

import scatShape from '../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
    deleteScats: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { scat, deleteScats } = this.props;
    deleteScats(scat.id);
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <p className="card-text">{scat.location}</p>
            <button href="#" className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;

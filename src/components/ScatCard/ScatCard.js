import React from 'react';
import { Link } from 'react-router-dom';
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
    const singleLink = `/scat/${scat.id}`;
    return (
      <div className="ScatCard col-4 mb-3">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <Link className="btn-sm btn-outline-success" to={singleLink}>View</Link>
            <p className="card-text">{scat.location}</p>
            <button href="#" className="btn-sm btn-outline-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;

import React from 'react';
import { Link } from 'react-router-dom';

import scatData from '../../helpers/data/scatData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error(err));
  }

  deleteScat = () => { // need to fix this, it's not deleting on single scat page
    const scatId = this.props.match.params.id;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error(err));
  }

  render() {
    const { scat } = this.state;
    const editLink = `/edit/${this.props.match.params.id}`;

    return (
      <div className="SingleScat">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h1 className="card-title">{scat.sampleName}</h1>
            <h2>{scat.location}</h2>
            <h3>{scat.sample}</h3>
            <h4>{scat.color}</h4>
            <h5>{scat.weight}</h5>
            <Link href="#" className="btn btn-outline-primary" to={editLink}>Edit</Link>
            <button href="#" className="btn btn-outline-danger" onClick={this.deleteScat}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleScat;

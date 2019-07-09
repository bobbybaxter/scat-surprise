import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345'; // usually e.target.something
    this.props.history.push(`/edit/${orderId}`);
  };

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatData.getScat(uid)
      .then(response => this.setState({ scats: response }))
      .catch(err => console.error(err));
  }

  render() {
    const singleLink = '/scat/12345';
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
      />
    ));
    return (
      <div className="Home col">
        <h1>Home</h1>
        <div className="buttons d-flex flex-row container justify-content-around">
          {/* can use this */}
          <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
          {/* or this */}
          <Link to={singleLink}>View Single</Link>
        </div>
        <div className="d-flex flex-row container justify-content-around mt-5">
          {makeScatCards}
        </div>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345'; // usually e.target.something
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const singleLink = '/scat/12345';
    return (
      <div className="Home col">
        <h1>Home</h1>
        {/* can use this */}
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
        {/* or this */}
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default Home;

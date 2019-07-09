import React from 'react';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <p className="card-text">{scat.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;

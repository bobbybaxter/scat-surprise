import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = firebase.auth().currentUser.uid;
    console.error(saveMe);
    scatData.postScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save scat', err));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat w-100 d-flex flex-wrap justify-content-center border">
        <div className="">
          <h1>Add New Scat</h1>
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="sampleName">Sample Name</label>
              <input
                type="text"
                className="form-control"
                id="sampleName"
                aria-describedby="emailHelp"
                placeholder="Sample 1"
                value={newScat.sampleName}
                onChange={this.sampleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                aria-describedby="color"
                placeholder="brown"
                value={newScat.color}
                onChange={this.colorChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="color"
                aria-describedby="weight"
                placeholder="12g"
                value={newScat.weight}
                onChange={this.weightChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="color"
                aria-describedby="location"
                placeholder="outside my house"
                value={newScat.location}
                onChange={this.locationChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="animal">Animal</label>
              <input
                type="text"
                className="form-control"
                id="color"
                aria-describedby="animal"
                placeholder="bigfoot"
                value={newScat.animal}
                onChange={this.animalChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Save New Scat</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewScat;

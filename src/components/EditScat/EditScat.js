import React from 'react';

import scatData from '../../helpers/data/scatData';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('did not get scat', err));
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
    const scatId = this.props.match.params.id;
    scatData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save scat', err));
  }

  render() {
    // const editId = this.props.match.params.id; // comes from App.js path="/edit/:id"
    const { newScat } = this.state;
    return (
      <div className="EditScat w-100 d-flex flex-wrap justify-content-center border">
        <div className="">
          <h1>Edit Scat</h1>
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

export default EditScat;

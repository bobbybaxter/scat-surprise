import React from 'react';

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

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat w-100 d-flex justify-content-center border">
        <div className="">
          <h1>Add New Scat</h1>
          <form>
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewScat;

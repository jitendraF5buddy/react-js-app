import React, { Component } from 'react';



class Addcontact extends Component {
  render() {
    return(
      <div className="row">
      <div className="col-sm-12">
            <form onSubmit={this.props.myformsubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label for="">Email</label>
                  <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="inputPassword4">Password</label>
                  <input type="password" className="form-control" name="password" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" name="address2" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" name="city" id="inputCity" />
                </div>
                <div className="form-group ">
                  <label for="inputState">State</label>
                  <select id="inputState" name="state" className="form-control">
                    <option selected>Choose...</option>
                    <option></option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="inputZip">Zip</label>
                  <input type="text" ref="zipcode" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" name="gridcheck" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button className="btn btn-primary">Sign in</button>
            </form>
          
      </div>
      </div>
    );
  }
}

export default Addcontact;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AdminLogin extends Component {
    render() {
        return (
           <div>
               <div className="container">
  <div className="row">
    <div className="col-md-4 offset-md-4">
      <div className="card text-white bg-primary" style={{marginTop: 200, marginBottom: 200, boxShadow: '5px 5px 3px grey'}}>
        <div className="card-header text-center"><h6> Predo.id | Admin Login </h6></div>
        <div className="card-body">
          <form className="text-center">
            <div className="form-group">
              <label><i style={{paddingRight: 3}} className="fa fa-user" /> Username : </label>
              <input type="text" placeholder=" Input admin username" />
            </div>
            <div className="form-group">
              <label><i style={{paddingRight: 3}} className="fa fa-key" /> Password : </label>
              <input type="password" placeholder=" Input admin password" />
            </div>
            <div className="form-group">
              <input type="checkbox" style={{paddingRight: 10}} /> Remeber me<br />
              <button type="submit" style={{marginRight: 5, marginTop: 10, marginBottom: '-10px'}} className="btn btn-success"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/dashboard">Login</Link></button>
              <button type="reset" style={{marginRight: 5, marginTop: 10, marginBottom: '-10px'}} className="btn btn-danger">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
} 

export default AdminLogin;
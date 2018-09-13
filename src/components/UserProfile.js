import React, { Component } from 'react';
import '../stylesheet/userprofile.css';

class UserProfile extends Component {
  render() {
    const {userData} = this.props;
    return (
      <div className="container alignCenter">
        <div className="row">
          <div className="col">
            <img className="image" src={userData.avatar_url} alt="User Profile" />
          </div>

          <div className="col">
            <div>
              <b>Name:</b> {userData.name}
            </div>

            <div>
              <b>Followers:</b> {userData.followers}
            </div>

            <div>
              <b>Following:</b> {userData.following}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default UserProfile;

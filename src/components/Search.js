import React, { Component } from 'react';
import UserProfile from './UserProfile.js'
import RepoList from './RepoList.js'
import '../stylesheet/search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: {},
      userRepos: [],
      value: 'hanzhao1',
      displayUser: false,
      errorMessage: '',
    }
  }

  _handleUserNameChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="main">
        <div className="errorMessage">
          {this.state.errorMessage}
        </div>

        <div className="form-group mx-sm-3 mb-2 inline">
          <input
            className="form-control"
            value={this.state.value}
            onChange={this._handleUserNameChange}
            placeholder="User name"
          />
        </div>

        <button className="btn btn-primary" onClick={()=>{
          fetch(`https://api.github.com/users/${this.state.value}`)
            .then((res)=>{
              return res.json();
            })
            .then((res)=>{
              if(res.message){
                this.setState({errorMessage: 'User Not Found', displayUser: false})
              } else {
                this.setState({userData: res, displayUser: true})
                fetch(`https://api.github.com/users/${this.state.value}/repos`)
                  .then((res)=>{
                    return res.json();
                  })
                  .then((res)=>{
                    this.setState({userRepos: res})
                  })
                  .catch((error)=>{
                    this.setState({errorMessage: 'Something wrong with server please try again in a few minutes', displayUser: false})
                  });
              }
            })
            .catch((error)=>{
              this.setState({errorMessage: 'Something wrong with server please try again in a few minutes', displayUser: false})
            });


        }}> Search User </button>

        {this.state.displayUser &&
          <UserProfile
            user={this.state.value}
            userData={this.state.userData}
          />
        }

        {this.state.displayUser &&
          <RepoList repos={this.state.userRepos}/>
        }


      </div>
    )
  }
};

export default Search;

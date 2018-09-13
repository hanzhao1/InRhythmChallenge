import React, { Component } from 'react';
import '../stylesheet/repolist.css';

class RepoList extends Component {
  render() {
    return (
      <div>
        <h3 className="titleName">
          Repository List:
        </h3>

        { this.props.repos.length === 0 ? (<div> No Repository Found </div>)
          : (<ul>
              {this.props.repos.map((ele, idx)=>{
                return (
                  <li key={idx} className="repoItem">
                    <div> <span className="boldItem"> Name:</span> {ele.name} </div>
                    <div> <span className="boldItem"> Description:</span> {ele.description} </div>
                    <div> <span className="boldItem"> Git URL:</span> {ele.git_url} </div>
                    <div> <span className="boldItem"> Stars:</span> {ele.stargazers_count} </div>
                    <div> <span className="boldItem"> Forks:</span> {ele.forks} </div>
                    <div> <span className="boldItem"> Open Issues:</span> {ele.open_issues} </div>
                    <div> <span className="boldItem"> Repository Size:</span> {ele.size} </div>
                  </li>)
              })}
            </ul>)
        }
      </div>
    )
  }
};

export default RepoList;

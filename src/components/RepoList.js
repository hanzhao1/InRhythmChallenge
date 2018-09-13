import React from 'react';
import '../stylesheet/repolist.css';


const RepoList = ({repos}) => {
  return (
    <div>
      <h3 className="titleName">
        Repository List:
      </h3>

      { repos.length === 0 ? (<div> No Repository Found </div>)
        : (<ul>
            {repos.map((ele, idx)=>{
              return (
                <li key={idx} className="repoItem">
                  <div> <b> Name:</b> {ele.name} </div>
                  <div> <b> Description:</b> {ele.description} </div>
                  <div> <b> Git URL:</b> {ele.git_url} </div>
                  <div> <b> Stars:</b> {ele.stargazers_count} </div>
                  <div> <b> Forks:</b> {ele.forks} </div>
                  <div> <b> Open Issues:</b> {ele.open_issues} </div>
                  <div> <b> Repository Size:</b> {ele.size} </div>
                </li>)
            })}
          </ul>)
      }
    </div>
  );
}

export default RepoList;

var GithubRepositoryItem = React.createClass({
  render: function() {
    return (
      <li className="project">
        <div>
          <h3>{this.props.repo.name}</h3>
          <p>{this.props.repo.description}</p>
          <a className="btn" href={this.props.repo.html_url} target="_blank">View on Github</a>
        </div>
      </li>
    );
  }
});

var GithubRepositoryList = React.createClass({
  render: function() {
    var repos = [];

    jQuery.ajax({
      url: this.props.source,
      success: function(result) {
                if(result.isOk == false) {
                  alert(result.message);
                } else {
                  result.forEach(function(repo) {
                    repos.push(<GithubRepositoryItem repo={repo} key={repo.name} />);
                  });
                }
              },
      async: false
    }); 

    return (
      <div>
        <h2>Github Projects</h2>
        <ul className="project-list" alignItems="stretch">
          {repos}
        </ul>
      </div>
    );
  }
});

React.render(
  <GithubRepositoryList source='https://api.github.com/orgs/friendlycode/repos' />,
  document.getElementById('github-projects')
);
var GithubRepositoryItem = React.createClass({
  render: function() {
    return (
      <li>{this.props.repo.name}</li>
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
        <ul>
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
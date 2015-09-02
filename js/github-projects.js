var GithubRepositoryItem = React.createClass({displayName: "GithubRepositoryItem",
  render: function() {
    return (
      React.createElement("li", null, this.props.repo.name)
    );
  }
});

var GithubRepositoryList = React.createClass({displayName: "GithubRepositoryList",
  render: function() {
    var repos = [];

    jQuery.ajax({
      url: this.props.source,
      success: function(result) {
                if(result.isOk == false) {
                  alert(result.message);
                } else {
                  result.forEach(function(repo) {
                    repos.push(React.createElement(GithubRepositoryItem, {repo: repo, key: repo.name}));
                  });
                }
              },
      async: false
    }); 

    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Github Projects"), 
        React.createElement("ul", null, 
          repos
        )
      )
    );
  }
});

React.render(
  React.createElement(GithubRepositoryList, {source: "https://api.github.com/orgs/friendlycode/repos"}),
  document.getElementById('github-projects')
);
import React from "react";
const Results = (props) => {
  const { repos } = props;
  console.log("Repos is: ", repos.data);

  const listRepos =
    repos.lenth !== 0 ? (
      repos.data.slice(0, 5).map(
        (item) => (
          <li key={item.id}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ),
        <li>no repos</li>
      )
    ) : (
      <li>no repos found</li>
    );

  return <ul>{listRepos}</ul>;
};

export default Results;

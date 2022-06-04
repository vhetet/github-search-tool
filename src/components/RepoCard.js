function RepoCard(props) {
    return (
      <div className="card">
        <p>{props.res.stargazers_count}</p>
        <p>{props.res.full_name}</p>
        <p>{props.res.description}</p>
      </div>
    )
  }

  export default RepoCard;
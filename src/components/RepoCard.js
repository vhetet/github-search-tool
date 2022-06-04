import "./RepoCard.css";

function RepoCard(props) {
  return (
    <div className="card">
      <h4>{props.res.full_name}</h4>
      <p>Stars count: {props.res.stargazers_count}</p>
      {props.res.description && <p>{props.res.description}</p>}
      {props.res.language && <p>{props.res.language}</p>}
      {props.res.license?.name && <p>{props.res.license?.name}</p>}
      {props.res.updated_at && <p> last update: {new Date(props.res.updated_at).toLocaleDateString()}</p>}
      {props.res.topics.length > 0 && (
        <p>Topics: {props.res.topics.join(", ")}</p>
      )}
    </div>
  );
}

export default RepoCard;

import './LaunchDetail.css';

export default function LaunchDetail({ launch }) {
  return (
    <div className="launch-detail">
      <h2>{launch.name}</h2>
      <p><b>Date:</b> {new Date(launch.date_utc).toLocaleString()}</p>
      <p><b>Rocket:</b> {launch.rocket}</p>
      {launch.links.webcast && (
        <a href={launch.links.webcast} target="_blank" rel="noreferrer">
          ▶ Watch Launch
        </a>
      )}
      <p className="details">{launch.details || 'No description available.'}</p>
    </div>
  );
}

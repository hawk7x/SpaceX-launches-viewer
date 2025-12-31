import './LaunchItem.css';

export default function LaunchItem({ launch, onClick }) {
  return (
    <div className="launch-item" onClick={onClick}>
      <img src={launch.links.patch.small} alt={launch.name} />
      <h3>{launch.name}</h3>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p className={launch.success ? 'success' : 'fail'}>
        {launch.success ? ' Success' : ' Fail'}
      </p>
    </div>
  );
}

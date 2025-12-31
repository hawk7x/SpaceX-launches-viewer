import LaunchItem from './LaunchItem';
import './LaunchList.css';

export default function LaunchList({ launches, onSelect }) {
  return (
    <div className="launch-list">
      {launches.map(launch => (
        <LaunchItem
          key={launch.id}
          launch={launch}
          onClick={() => onSelect(launch)}
        />
      ))}
    </div>
  );
}

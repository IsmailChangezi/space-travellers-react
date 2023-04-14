import { useSelector } from 'react-redux';

const Profile = () => {
  // const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  // const missionMembers = missions.filter((mission) => mission.member);

  return (
    <div>
      <ul className="w-50">
        <h1>My Rockets</h1>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id} className="p-1 text-2xl border">
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Profile;

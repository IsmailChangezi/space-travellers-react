import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = useSelector((state) => state.missionsReducer
    .filter((mis) => mis.isReserved));

  return (
    <div className="profile-page">
      <ul className="w-50">
        <h1>My Rockets</h1>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id} className="p-1 text-2xl border">
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
      <ul className="w-50">
        <h1>My Missions</h1>
        {reservedMissions.map((mission) => <li key={mission.id} className="p-1 text-2xl border">{mission.name}</li>)}
      </ul>
    </div>
  );
};
export default Profile;

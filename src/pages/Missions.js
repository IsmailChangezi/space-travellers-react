import React, { useEffect } from 'react';
/* eslint-disable-next-line */
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
/* eslint-disable-next-line */
import Table from "react-bootstrap/Table";
import Mission from '../components/Mission';
import { retriveMissions } from '../redux/missions/missions';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missionsReducer);
  const renderMissions = (missionsData) => missionsData.map((mission) => (
    <Mission
      id={mission.id}
      key={mission.id}
      name={mission.name}
      description={mission.description}
      isReserved={mission.isReserved}
    />
  ));
  return (
    <div className="table-container">
      <Table striped className="main-table my-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{renderMissions(missions)}</tbody>
      </Table>
    </div>
  );
}

export default Missions;

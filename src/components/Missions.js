import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissionData } from "../redux/missions/missionSlice";

export default function Missions() {
  const { data, loading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionData());
  }, []);
  console.log(data);
  return <div>Missions</div>;
}

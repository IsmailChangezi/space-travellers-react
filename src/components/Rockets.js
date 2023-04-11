import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRocketData } from "../redux/rocket/rocketSlice";

export default function Rockets() {
  const { data, loading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketData());
  }, []);
  if (loading) {
    return (
      <>
        <h1>loading ...</h1>
      </>
    );
  }
  if (error) {
    return <h1>Please try again later.</h1>;
  }
  return (
    <div>
      {data.map((item) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
}

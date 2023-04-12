import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketData } from '../redux/rocket/rocketSlice';

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
      {data.map((item) => (
        <div className="rocket-container" key={item.id}>
          <div className="img-div">
            <img src={item.flickr_images} className="images" alt={item.name} />
          </div>
          <div className="info-div">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button type="button" className="rocket-btn">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

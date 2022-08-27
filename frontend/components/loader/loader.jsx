import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';


const Loader = ({ loading }) => {
  return (
    <BeatLoader
      className="loading-dots"
      size={20}
      speedMultiplier={1}
      color={"#FF385C"}
      loading={loading} />
  );
};


export default Loader;
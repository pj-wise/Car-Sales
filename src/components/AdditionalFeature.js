import React from 'react';

const AdditionalFeature = (props) => {
  const buyItem = (e) => {
    e.preventDefault();
    props.buyItem(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className='button'>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

import React from 'react';
import Options from './Options';

export default function Features(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options features={props.features} feature={feature} selected={props.selected} updateFeature={props.updateFeature}/>
      </fieldset>
    );
  });

  return features;
}
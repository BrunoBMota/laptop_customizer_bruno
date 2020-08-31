import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


function Options(props) {
  const feature = props.feature;
  const options = props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === props.selected[feature].name}
          onChange={e => props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });

  return options;
}


function Features(props) {
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

class Form extends Component{
  
  defaultProps = {
    selected: {},
    features: {}
  }

  
  render(){
    return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features features={this.props.features} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
    </form>
    );
  }
}


export default Form;
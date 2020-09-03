import React, { Component } from 'react';
import Features from './Features';

class Form extends Component{
  
  static defaultProps = {
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
import React, { Component } from 'react';

import Summary from './Summary';
import SummaryTotal from './SummaryTotal';

class MainSummary extends Component{
  static defaultProps = {
    selected: {},
    features: {}
  }
  
  render(){
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return(
    <section className="main__summary">
      <h2>Your cart</h2>
      <Summary selected={this.props.selected}/>
      <SummaryTotal total={total}/>
    </section>
    );
  }
}


export default MainSummary;
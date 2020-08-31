import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


function Summary(props){
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  return summary;
}


function SummaryTotal(props){
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">{USCurrencyFormat.format(props.total)}</div>
    </div>
  )
}

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
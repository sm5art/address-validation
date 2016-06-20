import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(event) {
    console.log('changed')
    this.props.actions.api(event.target.value);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div className="counter-container">
        <div className="counter-num-label">{JSON.stringify(state)}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-buttons">
          <input style={{display:"block",padding:"3px"}} type="text" onChange={this.handleChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

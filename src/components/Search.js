import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.actions.load([position.coords.longitude,position.coords.latitude]);
      })
  }

  handleChange(event) {
    this.props.actions.api(event.target.value,this.props.state.load.coords);
  }

  render() {
    const { state, actions } = this.props;
    var content;
    if(state.load.status){
      content = (<div className="counter-container">
        <div className="counter-num-label">
        <input className="suggestions" type="text" onChange={this.handleChange.bind(this)}/>
          <ul>
          {
            state.search.map((object,i) => {
              return <li className="suggestions"><span>{`${object.streetNumber|| ""} ${object.street||""} ${object.city||""} ${object.state||""} ${object.country||""}`}</span></li>
            })
          }
          </ul>
        </div>
      </div>)
    }
    else {
      content = (
        <h1>Finding your position...</h1>
      )
    }
    return content;
  }
}

Search.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

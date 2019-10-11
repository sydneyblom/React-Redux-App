import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHouse } from '../actions';
import { Button } from "semantic-ui-react";

import House from './House';

const GetHouse = props => {
  useEffect(() => {
    props.fetchHouse();
  }, [] );

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading House...</h2>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      
      {/* <img src={"Images/" + props.house + ".png"}/> */}
      <div className="card-components">
      <House house={props.house}/>
      <Button onClick={() =>
        props.fetchHouse()
      }>Get House
      </Button>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
    return {
      house: state.house,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(
    mapStateToProps,
    { fetchHouse }
  )(GetHouse);
  
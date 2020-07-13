import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value))
      console.log(props.state.filters)
    }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    state
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

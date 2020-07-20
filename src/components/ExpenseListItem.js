import React from 'react';
import {NavLink} from 'react-router-dom'
import moment from 'moment'

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><NavLink to={`/edit/${id}`}>{description}</NavLink></h3>
    <p>
    {'₹'+amount.toLocaleString('en-IN')} 
    - 
    {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  
  </div>
);

export default ExpenseListItem;
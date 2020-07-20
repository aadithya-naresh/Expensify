import React from 'react';
import {NavLink} from 'react-router-dom'

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><NavLink to={`/edit/${id}`}>{description}</NavLink></h3>
    <p>{amount} - {createdAt}</p>
  
  </div>
);

export default ExpenseListItem;
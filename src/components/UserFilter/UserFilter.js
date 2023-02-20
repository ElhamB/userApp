import React from 'react'
import { useDispatch } from "react-redux";
import { filterByValue } from '../../store/user';
import './userFilter.css'
const UserFilter = () => {
  const dispatch = useDispatch();

  const handleFilterByValue = ({value}) => {
    dispatch(filterByValue({value}));
  };
  return (
    <div className='search-control'>
      <input placeholder='Add members by name or email'  onChange={(e) => handleFilterByValue(e.target.value)}/>
    </div>
  )
}

export default UserFilter

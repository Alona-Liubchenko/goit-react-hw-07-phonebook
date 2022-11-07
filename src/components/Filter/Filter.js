import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const changeFilter = e => {
    e.preventDefault();
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter}></Input>
    </Label>
  );
};
export default Filter;

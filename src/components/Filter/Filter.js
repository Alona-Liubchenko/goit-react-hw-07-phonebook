import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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

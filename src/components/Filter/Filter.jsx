import React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { SearchInput, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redax/filter/filterSlice';
import { selectFilterValue } from 'redax/filter/filterSelectors';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const resetFilter = () => {
    dispatch(setFilter(''));
  };

  return (
    <Label>
      <SearchInput
        value={filterValue}
        type="text"
        placeholder="Search by names..."
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        name="search"
        onChange={handleFilterChange}
      />
      {!filterValue && <BiSearch size="20" />}
      {filterValue && <BiX size="20" onClick={resetFilter} />}
    </Label>
  );
}

export default Filter;

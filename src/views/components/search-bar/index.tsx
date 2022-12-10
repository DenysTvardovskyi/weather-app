import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { HTMLAttributes, SyntheticEvent, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import * as React from 'react';
import {
  fetchOptions,
  setCriteria,
  setOptions,
  setValue,
} from '../../../redux/slices/searchSlice';
import SearchOption from './searchOption';
import { IOption } from '../../../application/intefaces/i-option';
import { IAppState } from '../../../application/intefaces/i-app';
import { fetchWeather } from '../../../redux/slices/citySlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const SearchBar = () => {
  const { criteria, options, value } = useAppSelector(
    (state: IAppState) => state.search,
  );
  const dispatch = useAppDispatch();

  const debouncedSearch = useRef(
    debounce(async (text: string) => {
      dispatch(fetchOptions(text));
      dispatch(setCriteria(text));
    }, 300),
  ).current;

  const handleCriteriaChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: IOption | null,
  ) => {
    dispatch(setOptions(newValue ? [newValue, ...options] : options));
    dispatch(setValue(newValue));
    if (newValue !== null) {
      dispatch(fetchWeather([newValue?.value[0], newValue?.value[1]]));
    }
  };

  const handleInputChange = (event: SyntheticEvent, newInputValue: string) => {
    debouncedSearch(newInputValue);
  };

  const searchInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      data-testid={'searchInput'}
      placeholder={'Add a location'}
      label='Add a location'
      fullWidth
    />
  );

  const renderOption = (
    props: HTMLAttributes<HTMLElement>,
    option: IOption,
  ) => (
    <li {...props}>
      <SearchOption option={option} criteria={criteria} />
    </li>
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={options}
      value={value}
      onChange={handleCriteriaChange}
      onInputChange={handleInputChange}
      renderInput={searchInput}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      renderOption={renderOption}
    />
  );
};

export default SearchBar;

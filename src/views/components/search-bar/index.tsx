import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SyntheticEvent, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOptions,
  setCriteria,
  setOptions,
  setValue,
} from 'slices/searchSlice';
import SearchOption from 'components/search-bar/searchOption';
import { IOption } from 'application/intefaces/i-option';
import { IAppState } from 'application/intefaces/i-app';
import { fetchWeather } from 'slices/citySlice';

const SearchBar = () => {
  const { criteria, options, value } = useSelector(
    (state: IAppState) => state.search,
  );
  const dispatch = useDispatch();

  const debouncedSearch = useRef(
    debounce(async (text: string) => {
      dispatch(fetchOptions(text));
      dispatch(setCriteria(text));
    }, 300),
  ).current;

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
      onChange={(
        event: SyntheticEvent<Element, Event>,
        newValue: IOption | null,
      ) => {
        dispatch(setOptions(newValue ? [newValue, ...options] : options));
        dispatch(setValue(newValue));
        dispatch(fetchWeather([newValue?.value[0], newValue?.value[1]]));
      }}
      onInputChange={(event, newInputValue) => {
        debouncedSearch(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label='Add a location' fullWidth />
      )}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      renderOption={(props, option: IOption) => (
        <li {...props}>
          <SearchOption option={option} criteria={criteria} />
        </li>
      )}
    />
  );
};

export default SearchBar;

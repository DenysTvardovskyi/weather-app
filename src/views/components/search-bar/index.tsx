import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import Typography from '@mui/material/Typography';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Grid from '@mui/material/Grid';

const SearchBar = () => {
  const [value, setValue] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<any>([]);

  const GOOGLE_MAPS_API_KEY =
    'pk.eyJ1IjoidGRtZGVuIiwiYSI6ImNsYjg1bXhkejBnYWkzcGxrcm03eWQ1YWIifQ.2l4UJvJG6pg33e05Az6KmQ';

  async function search(criteria: string) {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${criteria}.json?access_token=${GOOGLE_MAPS_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`,
    );
    const body = await response.json();
    const result = body.features.map((item: any) => {
      return {
        label: item?.matching_place_name ?? item?.place_name,
        value: item?.geometry?.coordinates,
      };
    });
    return [...result];
  }

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setOptions(await search(criteria));
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
      value={inputValue ?? value}
      onChange={(event: any, newValue: string | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        debouncedSearch(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label='Add a location' fullWidth />
      )}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      renderOption={(props, option) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <li {...props}>
            <Grid container alignItems='center'>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                <Typography variant='body2' color='text.secondary'>
                  {option.value.join(', ')}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};

export default SearchBar;

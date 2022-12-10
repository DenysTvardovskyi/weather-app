import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { IOption } from 'application/intefaces/i-option';

interface Props {
  option: IOption;
  criteria: string;
}

const SearchOption = (props: Props) => {
  const { option, criteria } = props;
  const matches = match(option.label, criteria);
  const parts = parse(option.label, matches);
  return (
    <Grid container alignItems='center'>
      <Grid item xs>
        {parts.map((part, index) => (
          <span key={index} data-testid={`criteria-highlight-${index}`}>
            {part.highlight ? <strong>{part.text}</strong> : part.text}
          </span>
        ))}
        <Typography variant='body2' color='text.secondary'>
          {option.value.join(', ')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchOption;

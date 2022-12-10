import { render, screen } from '@testing-library/react';
import * as React from 'react';
import SearchOption from '../../../../src/views/components/search-bar/searchOption';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

describe('search-option', () => {
  it('renders correctly', () => {
    const mockedData = {
      option: {
        label: 'Lviv',
        value: [42.12, 24.12],
      },
      criteria: 'Lvi',
    };

    const matches = match(mockedData.option.label, mockedData.criteria);
    const parts = parse(mockedData.option.label, matches);

    render(
      <SearchOption
        option={mockedData.option}
        criteria={mockedData.criteria}
      />,
    );

    expect(screen.getByText('42.12, 24.12')).toBeInTheDocument();
    expect(screen.getByTestId('criteria-highlight-0').textContent).toEqual(
      parts[0].text,
    );
    expect(screen.getByTestId('criteria-highlight-1').textContent).toEqual(
      parts[1].text,
    );
  });
});

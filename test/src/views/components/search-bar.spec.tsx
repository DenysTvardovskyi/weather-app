import { render, screen } from '@testing-library/react';
import * as React from 'react';
import store from '../../../../src/redux/store';
import userEvent from '@testing-library/user-event';
import SearchBar from '../../../../src/views/components/search-bar';
import { Provider } from 'react-redux';

describe('search-bar', () => {
  const state = store.getState().search;
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  it('Should initially set criteria to an empty string', () => {
    expect(state.criteria).toEqual('');
  });

  it('renders correctly', () => {
    render(<SearchBar />, {
      wrapper,
    });
    expect(screen.getByPlaceholderText('Add a location')).toBeInTheDocument();
  });

  it('should be able to type new data', async () => {
    render(<SearchBar />, {
      wrapper,
    });
    const searchEl = screen.getByPlaceholderText('Add a location');
    await userEvent.type(searchEl, 'Lvi');
    expect(searchEl.value).toBe('Lvi');
  });

  // it('should display selected city from dropdown list', async () => {
  //   render(<SearchBar />, {
  //     wrapper,
  //   });
  //   const searchEl = screen.getByPlaceholderText('Add a location');
  //   await userEvent.type(searchEl, 'Lvi');
  //   expect(searchEl.value).toBe('Lvi');
  // });
});

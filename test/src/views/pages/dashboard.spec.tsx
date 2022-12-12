import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Dashboard from '../../../../src/views/pages/dashboard';
import store from '../../../../src/redux/store';
import { Provider } from 'react-redux';

describe('dashboard', () => {
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  it('renders correctly', () => {
    render(<Dashboard />, { wrapper });

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Loader from '../../../../src/views/components/loader';

describe('loader', () => {
  it('renders correctly', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});

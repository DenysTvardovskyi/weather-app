import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Header from '../../../../src/views/shared/header';

describe('header component', () => {
  it('header renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Weather App')).toBeInTheDocument();
  });
});

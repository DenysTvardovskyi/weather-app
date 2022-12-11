import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Footer from '../../../../src/views/shared/footer';

describe('footer component', () => {
  it('footer renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Weather by TDM')).toBeInTheDocument();
  });
});

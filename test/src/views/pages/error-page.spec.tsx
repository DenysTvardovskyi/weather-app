import { render, screen } from '@testing-library/react';
import * as React from 'react';
import ErrorPage from '../../../../src/views/pages/error-page';
import { BrowserRouter } from 'react-router-dom';

describe('error page', () => {
  const MockRouter = () => {
    return (
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
  };

  it('error page works correctly', () => {
    render(<MockRouter />);
    expect(screen.getByText('Back to Dashboard')).toBeInTheDocument();
  });
});

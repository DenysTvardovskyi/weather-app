import { HashRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Layout from '../../../../src/views/shared/layout';
import { Provider } from 'react-redux';
import store from '../../../../src/redux/store';
import Dashboard from '../../../../src/views/pages/dashboard';
import CityPage from '../../../../src/views/pages/city-page';
import userEvent from '@testing-library/user-event';

describe('layout component', () => {
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  const MockRouter = () => {
    return (
      <HashRouter>
        <Layout />
      </HashRouter>
    );
  };

  it('renders correctly', () => {
    render(<MockRouter />, { wrapper });
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('side-bar')).toBeInTheDocument();
    expect(screen.getByTestId('router-outlet-cont')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  const FakeComponent = () => <div>fake text</div>;
  it('Test outlet', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<FakeComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>,
      { wrapper },
    );
    expect(screen.queryByText('fake text')).toBeInTheDocument();
  });

  it('Dashboard route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
          </Route>
        </Routes>
      </MemoryRouter>,
      { wrapper },
    );
    expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add a location/i)).toBeInTheDocument();
  });
  it('City route with no props', () => {
    render(
      <MemoryRouter initialEntries={['/weather']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/weather' element={<CityPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
      { wrapper },
    );
    expect(screen.getByText(/Back to Dashboard/i)).toBeInTheDocument();
  });
});

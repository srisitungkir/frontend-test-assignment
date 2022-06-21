import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  expect(screen.queryByText('Learn React')).not.toBe(null);

  // pastiin element linknya ada 1 doang
  expect(screen.getAllByText('Learn React').length).toBe(1);

  // async - pake find
  expect(await screen.findByText('Learn React')).toBeInTheDocument();

  // cari by test id
  const linkElementTestId = screen.getByTestId("App-link");
  expect(linkElementTestId).toBeInTheDocument();
});

test('renders react logo spinning image', () => {
  render(<App />);
  const imgElement = screen.getByTestId("image-react");
  expect(imgElement).toBeInTheDocument();
});

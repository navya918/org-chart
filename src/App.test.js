import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock Axios
jest.mock('axios');

test('renders organizational chart title', () => {
  // Mock the API response to return dummy data
  axios.get.mockResolvedValue({
    data: [] // You can mock data here if needed
  });

  render(<App />); // Render the App component
  const titleElement = screen.getByText(/Organizational Chart/i);  // Match the actual title
  expect(titleElement).toBeInTheDocument(); // Assert that the title is in the document
});

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

global.URL = {
    createObjectURL: jest.fn(),
  };
  
  // Provide a mock implementation for createObjectURL
    // This error typically occurs when using map libraries like maplibre-gl or mapbox-gl
    // in a testing environment because these libraries may use features that are not fully
    // supported in a Node.js testing environment
  global.URL.createObjectURL.mockImplementation(() => 'mocked-url');

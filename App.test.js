import React from 'react'
import { cleanup, render } from 'react-native-testing-library';
import App from './App'

afterEach(cleanup)

describe('<App />', () => {
  it('has 2 child', () => {
    const tree = render(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
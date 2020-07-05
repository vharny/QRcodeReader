import React from 'react'
import { render } from 'react-native-testing-library'
import LoadingSpinner from './LoadingSpinner'

describe('Testing Loading Spinner', () => {
  test('Show overlay with spinner when something is loading', () => {
    const { getByTestId } = render(<LoadingSpinner loading={true}/>)
    expect(getByTestId("loading").props.children.length).toBe(2);
  })
})
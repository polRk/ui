import React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from '../src'

describe('it', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

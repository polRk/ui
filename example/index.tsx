import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from '../dist/Button'

const App = () => {
  return (
    <section>
      <Button />
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

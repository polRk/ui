import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from '../dist/Button'
import { TextField } from '../dist/TextField'

const App = () => {
  return (
    <main>
      <section>
        <Button />
      </section>
      <section>
        <TextField />
      </section>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

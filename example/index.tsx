import { useState } from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '../src/Button'
import { TextField } from '../src/TextField'

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <main>
      <section>
        <label>
          <input type="checkbox" onChange={v => setLoading(!loading)} />
          Loading
        </label>
      </section>
      <section>
        <Button href="#" isLoading={loading}>
          LinkButton
        </Button>
      </section>
      <section>
        <Button variant="default" isLoading={loading}>
          Default
        </Button>
      </section>
      <section>
        <Button variant="primary" isLoading={loading}>
          Primary
        </Button>
      </section>
      <section>
        <Button variant="danger" isLoading={loading}>
          Danger
        </Button>
      </section>
      <section>
        <Button
          isLoading={loading}
          elementBefore={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          }
        >
          Element Before
        </Button>
      </section>
      <section>
        <Button
          isLoading={loading}
          elementAfter={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
            </svg>
          }
        >
          Element After
        </Button>
      </section>
      <section>
        <Button isLoading={loading}>Loading</Button>
      </section>
      <section>
        <TextField />
      </section>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import { initContract } from './utils'
import App from './App';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)

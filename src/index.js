import React from 'react'
import ReactDOM from 'react-dom'
import { initContract } from './utils'
import AppTest from './AppTest';

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <AppTest />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)

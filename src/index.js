import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '~/store'
import Main from '~/Main'
import getGraph from '~/getGraph'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  setTimeout(() => {
    store.dispatch(getGraph('{ characters { id, role, actor } }'))
  }, 1000)
})

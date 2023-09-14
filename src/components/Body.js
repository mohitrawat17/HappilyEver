import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

const Body = () => {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  )
}

export default Body

import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import MeteoPage from './pages/MeteoPage';

import { store } from './store'
import { Provider } from "react-redux";


import Lab6List from './pages/lab6List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Это наша стартовая страница</h1>
  },
  {
    path: '/new',
    element: <h1>Это наша страница с чем-то новеньким</h1>
  },
  {
    path: '/search',
    element: <MeteoPage />
  },
  {
    path: '/list',
    element: <Lab6List />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ul>
        <li>
          <a href="/">Старт</a>
        </li>
        <li>
          <a href="/new">Хочу на страницу с чем-то новеньким</a>
        </li>
        <li>
          <a href="/search">Поиск</a>
        </li>
        <li>
          <a href="/list">Store</a>
        </li>
      </ul>
      <hr />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
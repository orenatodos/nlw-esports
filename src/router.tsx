import { createBrowserRouter } from 'react-router-dom'

import { App } from './App'

import { ErrorPage } from './pages/Error'
import { Home, HomeLoader } from './pages/Home'
import { GameAds, AdsLoader } from './pages/GameAds'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: HomeLoader
      },
      {
        path: '/:game',
        element: <GameAds />,
        errorElement: <ErrorPage />,
        loader: AdsLoader
      }
    ]
  }
])

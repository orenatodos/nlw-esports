import { Outlet } from 'react-router-dom'

import { AppProvider } from './contexts/AppProvider'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const App = () => (
  <AppProvider>
    <div className="max-w-[1344px] mx-auto px-6 flex flex-col items-stretch min-h-[100vh]">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  </AppProvider>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Components/Routes/Route.jsx'
import InfoProvider from './Components/Provider/InfoProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <InfoProvider>
        <div className='max-w-7xl mx-auto'>
          <RouterProvider router={Route}></RouterProvider>
        </div>
      </InfoProvider>
    </QueryClientProvider>
  </StrictMode>,
)

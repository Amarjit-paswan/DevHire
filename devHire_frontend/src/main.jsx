import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

//Import font awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import bootstrap file 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home/Home.jsx'
import Jobs from './components/Jobs/Jobs.jsx'
import JobDetail from './components/Jobs/JobDetail.jsx'

// Create a broswer route for different path 
const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />,
    children:[
      {index:true, element:<Jobs />},
      {path:"/job", element:<JobDetail />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

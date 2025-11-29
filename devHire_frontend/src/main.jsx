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
import { JobProvider } from './context/JobContext'
import { SaveJob_Provider } from './context/JobSaveContext.jsx'
import SavedJob from './components/Saved_Jobs/SavedJob.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import JobType from './components/Jobs/JobType.jsx'
import { JobTypeProvider } from './context/JobTypeContext.jsx'
import { JobSalaryProvider } from './context/JobSalaryContext.jsx'

// Create a broswer route for different path 
const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />,
    children:[
      {index:true, element:<Jobs />},
      {path:"/job/:id", element:<JobDetail />},
      {path:"/saved_job", element:<SavedJob />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
      <SaveJob_Provider>
        <SearchProvider>
          <FilterProvider>
            <JobTypeProvider>
              <JobSalaryProvider>
                <RouterProvider router={router} />
              </JobSalaryProvider>
            </JobTypeProvider>
          </FilterProvider>
        </SearchProvider>
      </SaveJob_Provider>
    </JobProvider>
  </StrictMode>,
)

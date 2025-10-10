import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Apps from '../pages/Apps'
import AppDetails from '../pages/AppDetails'
import NotFound404 from '../pages/NotFound404'
import MainLayout from '../Layouts/MainLayout'
import InstallPage from '../pages/InstallPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound404 />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <Apps /> },
      { path: 'apps/:id', element: <AppDetails /> },
      { path: 'install', element: <InstallPage /> },
      { path: '*', element: <NotFound404 /> },
    ],
  },
])
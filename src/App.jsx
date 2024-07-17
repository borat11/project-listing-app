import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootlayOut from '../RootlayOut/RootlayOut'
import Home from './pages/Home'
import Projects from './pages/TaskView'
import Contacts from './pages/Contacts'
import TaskView from './pages/TaskView'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootlayOut/> }>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/task view' element={<TaskView/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        </Route>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

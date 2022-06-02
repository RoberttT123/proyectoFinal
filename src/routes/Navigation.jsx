    import React from 'react'
    import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
    import { Home } from '../components/Home'
    import { Login } from '../components/Login'
    import '../styles/App.css'
    import { Students } from '../components/Students'
    import { Exit } from '../components/Exit'
    import logo from '../../src/logo_sucha.png';
    
    function Navigation() {
      return (
        
        <BrowserRouter>
        <nav>
            <img src={logo} alt=''/>
        <ul>
            <li>
                <NavLink to='/Home' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/Login' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to='/students' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Students
                </NavLink>
            </li>
            <li>
                <NavLink to='/Exit' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Exit
                </NavLink>
            </li>
        </ul>
        </nav>
        <Routes>
          <Route path='Login' element={<Login/>}/>
          <Route path='Students' element={<Students/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Exit' element={<Exit/>}/>
          <Route path='/*' element={<Navigate to='/home' /> }/>
        </Routes>
        </BrowserRouter>
      )
    }
    
    export {Navigation}
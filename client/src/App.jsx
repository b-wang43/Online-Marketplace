import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Profile from '../Profile'
import About from './About'
import Header from './components/header'
export default function App() {
  return  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </BrowserRouter>
}

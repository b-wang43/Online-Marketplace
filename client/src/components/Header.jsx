import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl'>
            <Link to= '/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap mx-auto p-3'>
                    <span className='text-slate-500'>Online</span>
                    <span className='text-slate-700'>Marketplace</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" 
                placeholder="Search for items..."
                className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                 <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 
                    hover:underline hover:text-slate-500'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 
                    hover:underline hover:text-slate-500'>About</li>
                </Link>
               <Link to='/login'>
                    <li className=' text-slate-700 
                     hover:underline hover:text-slate-500'>Login</li>
               </Link>
                <Link to='/profile'>
                    <li className=' text-slate-700 
                     hover:underline hover:text-slate-500'>Profile</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

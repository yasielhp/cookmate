import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from './assets/logo.svg'
import { Home, CreateRecipe } from './pages/'
export default function App () {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-Gray border-opacity-20'>
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-8 object-contain' />
          <p className='text-lg font-medium text-Green'><span className='font-bold text-Orange'>Cook</span>Mate</p>
        </Link>
        <Link
          to='/create-recipe'
          className='font-semibold bg-Green text-White px-4 py-2 rounded-md'
        >
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-Gray bg-opacity-5 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

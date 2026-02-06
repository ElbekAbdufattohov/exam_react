import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import FilterPage from './pages/filter/FilterPage'
import SinglPage from './pages/singl/SinglPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
     <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/filter' element={<FilterPage/>}/>
          <Route path='/product/:id' element={<SinglPage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
   </QueryClientProvider>
  )
}

export default App

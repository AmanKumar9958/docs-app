import React from 'react'
import './index.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
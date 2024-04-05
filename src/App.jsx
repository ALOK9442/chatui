import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './chat'

function App() {
  const [count, setCount] = useState(0)

// useEffect(()=>{
//   localStorage.removeItem('Data')
//   localStorage.removeItem('activeChatId')
//   localStorage.removeItem('users')
// })

  return (
    <div className=''>
    <Chat/>
    </div>
  )
}

export default App

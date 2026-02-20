import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
          <div className="grid grid-cols-1 bg-blue-500">
            <div className='text-white'>Next-Payout</div>
            <div className='text-white grid grid-cols-1 gap-10'>
              <div>2312.23</div>
              <div>23orders</div>
            </div>
            <div className='text-white bg-purple-900 grid grid-cols-2 gap-10 '>
              <div>Next Payment Date:</div>
              <div>Today,4:00PM</div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 text-black'>
            <div>Amount Processed</div>
            <div className='grid grid-cols-2 gap-10'>
              <div>92,312.20</div>
              <div>13 orders</div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 text-black'>
            <div>Amount Processed</div>
            <div className='grid grid-cols-2 gap-10'>
              <div>92,312.20</div>
              <div></div>
            </div>
          </div>
          
      </div> 
    </>
  ) 
}
export default App

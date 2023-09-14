import React from 'react'
import { Link } from 'react-router-dom'

const Summary = () => {
  return (
    <div className='sha mt-64  flex flex-col justify-center items-center'>
      <div className='flex items-center flex-col text-xl font-semibold border p-4 rounded-xl shadow-xl bg-blue-400 text-white'>
      <div>Your name Mohit, aged 27 has been added to student system.</div>
      <Link to='/' className='cursor-pointer'>You may now exit</Link>
      </div>
    </div>
  )
}

export default Summary

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Summary = () => {
  const userName=useSelector(store=>store.bot.names);
  const userAge=useSelector(store=>store.bot.ages);
  const day=useSelector(store=>store.slot.day);
  const time=useSelector(store=>store.slot.time)

  return (
    <div className='sha mt-64  flex flex-col justify-center items-center'>
      <div className='flex items-center flex-col text-xl font-semibold border p-4 rounded-xl shadow-xl bg-blue-400 text-white'>
      <div>Your name {userName[userName.length-1]}, aged {userAge[userAge.length-1]} has been added to student system.</div>
      <Link to='/' className='cursor-pointer'>You may now exit</Link>
      </div>

    </div>
  )
}

export default Summary

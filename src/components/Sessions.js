import React from 'react'

const Sessions = ({name,age,day,time}) => {
  return (
    <div className="rounded-xl shadow-xl w-96 p-3 border-gray-100 border">
                <div className="font-semibold pb-2">Name : {name}</div>
                <div className="font-semibold pb-2">Age : {age}</div>
                <div className="text-green-500 pb-2">Online</div>
                <div className="flex justify-between pb-2 w-2/4">
                <div>{day}</div>
                <div>{time}</div>
                </div>
                <div className="flex justify-between">
                   <h3 className="text-gray-600">Reschedule</h3>
                   <h3 className="text-red-600">Cancel</h3>
                   <button className="bg-green-600 py-1 px-2 text-white rounded-lg" onClick={()=>alert("Meeting not started yet.")}>Join Meeting</button>
                </div>
           </div>
  )
}

export default Sessions

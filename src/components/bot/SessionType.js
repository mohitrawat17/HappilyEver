import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSlot, addTime } from "../../redux/slotSlice";

const SessionType = (props) => {
  const dispatch=useDispatch();

  const [flag, setFlag] = useState(false)
  const[time,setTime]=useState(true)

  const sessionType = [
    {
      text: "4 MAY",  id: 1,
    },
    { text: "5 MAY", id: 2 },
    { text: "6 MAY", id: 3 },
  ];

  const morning = [
    { slot: "9:00 AM", id:'1'},
    { slot: "10:00 AM", id:'2'},
    { slot: "11:00 AM", id:'3'},
    { slot: "12:00 PM", id:'4'},
  ]

  const noon = [
    { slot: "2:00 PM", id:'1'},
    { slot: "3:00 PM", id:'2'},
    { slot: "4:00 PM", id:'3'},
    { slot: "12:00 PM", id:'4'},
  ]


  const handleSlots=(timeSlot)=>{
    props.actions.handleSlot();
    setFlag(false)
    setTime(false)
    dispatch(addTime(timeSlot))
  }

  const handler=(day)=>{
    dispatch(addSlot(day))
     setFlag(true)
  }

  const buttonsMarkup = sessionType.map((option) => (
    <button key={option.id} onClick={()=>handler(option.text)} className="m-2 rounded-lg px-2 py-1 border border-blue-400 text-blue-400 text-center">
      {option.text}
    </button>
  ));

  return (
    <div>
      <div className="flex flex-wrap ml-12">{time&&buttonsMarkup}</div>


      {flag && <div>
         <h3>MORNING</h3>
        {morning.map((val) => (
          <button key={val.id} onClick={()=>handleSlots(val.slot)} className="m-2 w-24 rounded-lg px-2 py-1 border border-blue-400 text-blue-400 text-center">
            {val.slot}
          </button>
        ))}
      </div>}


      {flag && <div>
        <h3>NOON</h3>
        {noon.map((val) => (
          <button key={val.id} onClick={()=>handleSlots(val.slot)} className="m-2 w-24 rounded-lg px-2 py-1 border border-blue-400 text-blue-400 text-center">
            {val.slot}
          </button>
        ))}
      </div>}

    </div>
  )

};

export default SessionType;
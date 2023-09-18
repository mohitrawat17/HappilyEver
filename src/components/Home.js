import { useSelector } from 'react-redux'
import { useState } from "react";
import { Link } from "react-router-dom";
import Sessions from './Sessions';

const Home = () => {
    const userName = useSelector(store => store.bot.names);
    const userAge = useSelector(store => store.bot.ages);
    const day = useSelector(store => store.slot.day);
    const time = useSelector(store => store.slot.time)


    const [upcoming, setUpcoming] = useState(true);
    return (
        <div className=" w-full h-full  flex flex-col ">
            <div className="w-full text-lg font-semibold bg-blue-300">


                <div className=" flex justify-between mx-3 items-center my-4">
                    <div>
                        <h2 className=" text-blue-600 pb-3">Welcome to HappilyEver !</h2>

                        <h2 className="pb-3">Good Morning, Mohit !</h2>
                    </div>
                    <div className=" bg-white rounded-full px-2 py-1">M</div>
                </div>
            </div>


            {/* ---------- */}

            <div className="flex  mx-auto  border border-blue-300 my-8 rounded-2xl shadow-lg">
                <div onClick={() => setUpcoming(true)} className={`cursor-pointer ${upcoming ? "bg-blue-300 rounded-l-xl" : "bg-white rounded-l-2xl"}   p-2`} >
                    Upcoming Sessions
                </div>

                <div onClick={() => setUpcoming(false)} className={`cursor-pointer ${!upcoming ? "bg-blue-300 rounded-r-xl" : "bg-white rounded-r-2xl"}   p-2`}>
                    Completed Sessions
                </div>
            </div>

            {/* -------------- */}

            {
                upcoming ?
                    <div className="flex items-center flex-col gap-7 justify-center flex-wrap">


                        {
                            userName.length > 0 ?
                            <>
                                <Sessions name={userName[userName.length - 1]} age={userAge[userAge.length - 1]} day={day[day.length - 1]} time={time[time.length - 1]} />
                                <div className='flex px-3 rounded '>
                                    <Link to='bot' className=" text-xl bg-blue-300 px-[10px] shadow-lg shadow-gray-500 cursor-pointer rounded-lg py-1">
                                        Enroll More
                                    </Link>
                                </div>
                                </>
                                :
                                <div className=' px-3 flex flex-col items-center h-60 rounded justify-center'>
                                    <div className='text-xl mb-4'>Enter into Student Info System</div>
                                    <Link to='bot' className=" text-xl bg-blue-300 px-[10px] shadow-lg shadow-gray-500 cursor-pointer rounded-lg py-1">
                                        Enroll Now
                                    </Link>
                                </div>
                        }


                    </div>
                    :
                    <div className='flex justify-center items-center'>You have not completed sessions yet</div>
            }




            {/* ----- */}



        </div>
    );
};

export default Home;

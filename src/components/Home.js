import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
    return (
        <div className=" w-full h-full  flex flex-col ">
            <div className="w-full text-lg font-semibold bg-blue-300">


                <div className=" flex justify-between px-4 items-center shadow-xl bg-white py-2">
                    <img
                        className="cursor-pointer"
                        src="https://www.happilyever.co/static/media/newLogo.aa017d5297ade31296050058d61d207d.svg"
                    />
                    <ExitToAppIcon className="cursor-pointer" />
                </div>

                <div className=" flex justify-between mx-3 items-center my-4">
                    <div>
                        <h2 className=" text-blue-600 pb-3">Welcome to HappilyEver !</h2>

                        <h2 className="pb-3">Good Morning, Mohit !</h2>
                    </div>
                    <div className=" bg-white rounded-full px-2 py-1">M</div>
                </div>
            </div>


            {/* ---------- */}

            <div className="flex w-80 mx-auto  border border-gray-300 my-8 rounded-xl shadow-lg">
                <div className=" bg-blue-300 rounded-l-xl p-2" >
                    Upcoming Sessions
                </div>

                <div className="rounded-r-xl p-2">
                    Completed Sessions
                </div>
            </div>

            {/* -------------- */}

            <div className="flex gap-7 justify-center flex-wrap">
            <div className="rounded-xl shadow-xl w-96 p-3 border-gray-100 border">
                 <div className="font-semibold pb-2">Meeting with Dr Jyoti</div>
                 <div className="text-green-500 pb-2">Online</div>
                 <div className="flex justify-between pb-2 w-2/4">
                 <div>8,May</div>
                 <div>11:00-11:30AM</div>
                 </div>
                 <div className="flex justify-between">
                    <h3 className="text-gray-600">Reschedule</h3>
                    <h3 className="text-red-600">Cancel</h3>
                    <button className="bg-green-600 py-1 px-2 text-white rounded-lg">Join Meeting</button>
                 </div>
            </div>

            <div className="rounded-xl shadow-xl w-96 p-3 border-gray-100 border">
                 <div className="font-semibold pb-2">Meeting with Dr Jyoti</div>
                 <div className="text-green-500 pb-2">Online</div>
                 <div className="flex justify-between pb-2 w-2/4">
                 <div>8,May</div>
                 <div>11:00-11:30AM</div>
                 </div>
                 <div className="flex justify-between">
                    <h3 className="text-gray-600">Reschedule</h3>
                    <h3 className="text-red-600">Cancel</h3>
                    <button className="bg-green-600 py-1 px-2 text-white rounded-lg">Join Meeting</button>
                 </div>
            </div>

            <div className="rounded-xl shadow-xl w-96 p-3 border-gray-100 border">
                 <div className="font-semibold pb-2">Meeting with Dr Jyoti</div>
                 <div className="text-green-500 pb-2">Online</div>
                 <div className="flex justify-between pb-2 w-2/4">
                 <div>8,May</div>
                 <div>11:00-11:30AM</div>
                 </div>
                 <div className="flex justify-between">
                    <h3 className="text-gray-600">Reschedule</h3>
                    <h3 className="text-red-600">Cancel</h3>
                    <button className="bg-green-600 py-1 px-2 text-white rounded-lg">Join Meeting</button>
                 </div>
            </div>

            <div className="rounded-xl shadow-xl w-96 p-3 border-gray-100 border">
                 <div className="font-semibold pb-2">Meeting with Dr Jyoti</div>
                 <div className="text-green-500 pb-2">Online</div>
                 <div className="flex justify-between pb-2 w-2/4">
                 <div>8,May</div>
                 <div>11:00-11:30AM</div>
                 </div>
                 <div className="flex justify-between">
                    <h3 className="text-gray-600">Reschedule</h3>
                    <h3 className="text-red-600">Cancel</h3>
                    <button className="bg-green-600 py-1 px-2 text-white rounded-lg">Join Meeting</button>
                 </div>
            </div>
            </div>
           



            {/* ----- */}

<div className=" text-4xl bg-blue-300 px-[10px] shadow-lg shadow-gray-500 cursor-pointer rounded-full pb-1 fixed left-3/4 top-3/4 mt-24 ml-56">
    +
</div>

        </div>
    );
};

export default Home;

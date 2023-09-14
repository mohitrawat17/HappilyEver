import React, { useState } from "react";

const Options = (props) => {
    const[flag,setFlag]=useState(true)
  const options = [
    {
      text: "Got it !",
      id: 1,
    },

  ];

  const handler=()=>{
    props.actions.handleSession();
     setFlag(false)
  }


  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={handler} className="m-2 rounded-lg px-2 py-1 border border-blue-400 text-blue-400 text-center">
      {option.text}
    </button>
  ));

  return <div className="flex flex-wrap ml-12">{flag && buttonsMarkup}</div>;
};

export default Options;
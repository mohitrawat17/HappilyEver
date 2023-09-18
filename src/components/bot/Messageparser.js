import React from 'react';
import {addName,addAge } from '../../redux/botSlice';
import { useDispatch } from 'react-redux';

const Messageparser = ({ children, actions }) => {

  const dispatch=useDispatch();
  

  const parseName = (name) => {
    //name = data we will send
    if (name==parseInt(name)) {
      //age
      dispatch(addAge(name));
      actions.handleFinal();
    }
    else{
      //name
     dispatch(addName(name))
      actions.handleAge();
    }
    
  };

 
  return (
    <div> 
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parseName,
          actions,
        });
      })}
    </div>
  );
};

export default Messageparser;
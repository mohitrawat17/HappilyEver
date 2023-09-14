import React from 'react';

const Messageparser = ({ children, actions }) => {

  const parseName = (name) => {
    //name = data we will send
    if (name==parseInt(name)) {
      //age
      actions.handleFinal();
    }
    else{
      //name
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
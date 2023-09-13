import React from 'react';

const Messageparser = ({ children, actions }) => {

  const parse = (message) => {

    //message = data we will send
    // console.log(message);
    if (message.includes('yes')) {
      actions.handleSession();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default Messageparser;
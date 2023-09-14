import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleSession = () => {

    const botMessage = createChatBotMessage('Pick a slot !',{
      widget:"sessionType"
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }


  const handleSlot = () => {

    const botMessage = createChatBotMessage('Enter your name');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleAge = () => {

    const botMessage = createChatBotMessage('Enter your age');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }


  const handleFinal = () => {

    const botMessage = createChatBotMessage('Thank you');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    
  }


  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
               handleSession,
               handleSlot,
               handleAge,
               handleFinal
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
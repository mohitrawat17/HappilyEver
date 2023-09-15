import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
   const navigate=useNavigate();



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

    const botMessage = createChatBotMessage(`Thank you, redirecting in 5 seconds.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      navigate('/summary')
    }, 5000);
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
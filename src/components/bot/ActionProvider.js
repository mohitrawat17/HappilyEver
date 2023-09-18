import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
   const navigate=useNavigate();
   const day = useSelector(store => store.slot.day);
   const time = useSelector(store => store.slot.time);

  const handleSession = () => {

  

    const clientMessage = createClientMessage('Got it !');


    const botMessage = createChatBotMessage('Pick a slot !',{
      widget:"sessionType"
    });

    

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,clientMessage, botMessage],
    }));
  }


  const handleSlot = () => {


    const clientMessage =createClientMessage(`${day[day.length - 1]} ${time[time.length-1]}`);
    const botMessage = createChatBotMessage('Enter your name');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage,botMessage],
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
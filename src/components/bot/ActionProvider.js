import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleSession = () => {
    const botMessage = createChatBotMessage('How do you want your session ?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
               handleSession,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
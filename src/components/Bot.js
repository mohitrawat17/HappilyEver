import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/bot/config';
import MessageParser from './bot/Messageparser.js';
import ActionProvider from '../components/bot/ActionProvider.js';
import './bot/chatBot.css'


const Bot = () => {
    return (
        <div className='h-full'>
          <Chatbot 
          
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}

           
          />
        </div>
      );
}

export default Bot

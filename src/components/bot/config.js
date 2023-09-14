import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '@mui/material/Avatar';
import bot from '../../images/bot.png'
import user from '../../images/user.png'
import Options from './Options';
import SessionType from './SessionType';



const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{
     widget:'options'
  }
  )],
  botName:"HappilyEver Bot",
  customComponents: {
    botAvatar: (props) =>  <Avatar
    className='mr-3'
    alt="Remy Sharp"
    src={bot}
    sx={{ width: 35, height: 35}}
  /> ,
   userAvatar: (props) => <Avatar
   className='ml-3'
   alt="Remy Sharp"
   src={user}
   sx={{ width: 35, height: 35}}/>,
 },
 widgets:[
  {
    widgetName: 'options',
    widgetFunc: (props) => <Options {...props} />,
  },
  {
    widgetName: 'sessionType',
    widgetFunc: (props) => <SessionType {...props} />,
  },
 ]
};

export default config;
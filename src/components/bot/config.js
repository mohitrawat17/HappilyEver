import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '@mui/material/Avatar';
import bot from '../../images/bot.png'
import user from '../../images/user.png'


const config = {
  initialMessages: [createChatBotMessage(`Do you want to schedule meeting ?`)],
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
};

export default config;
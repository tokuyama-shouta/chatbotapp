import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Hito from '../assets/img/hito.png';

const Chat = (props) =>{

  //<ListItemAvatar> 写真

  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
  
  return(
    <ListItem className={classes}>
        <ListItemAvatar> 
          {/* return内での条件分岐 */}
          {isQuestion ? (
            <Avatar alt="icon" src={Hito} />

          ) : (
            <Avatar alt="icon" src={NoProfile} />

          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
      
    </ListItem>
  )
  
}

export default Chat
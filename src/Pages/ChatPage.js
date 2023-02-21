import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";



const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const {  setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats, } = ChatState();

  return (
    <div style={{ width: "100%"}}>
      {user && <SideDrawer />}
      <Box 
     display='flex'
      justifyContent='space-between'
      height='91.5vh'
      width='100%'
      padding='10px'

    
      >
       <span>{user && <MyChats fetchAgain={fetchAgain} />}</span>
        
        <span>{user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}</span>
      </Box>
    </div>
  );
};

export default Chatpage;
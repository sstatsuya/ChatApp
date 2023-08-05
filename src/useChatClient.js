// useChatClient.js

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  chatApiKey,
  chatUserId,
  chatUserName,
  chatUserToken,
  users,
} from "./chatConfig";

const chatClient = StreamChat.getInstance(chatApiKey);

export const useChatClient = (userIndex) => {
  const [clientIsReady, setClientIsReady] = useState(false);

  const setupClient = async () => {
    try {
      chatClient.connectUser(
        {
          id: users[userIndex].chatUserId,
          name: users[userIndex].chatUserName,
        },
        users[userIndex].chatUserToken
      );
      setClientIsReady(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`LOI connecting the user: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    if (!chatClient.userID) {
      setupClient();
    }
  }, []);

  return {
    clientIsReady,
  };
};

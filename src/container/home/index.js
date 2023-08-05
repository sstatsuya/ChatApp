import React from "react";
import { View, Text } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-react-native";
import { chatApiKey } from "../../chatConfig";

import { useChatClient } from "../../useChatClient";

const chatClient = StreamChat.getInstance(chatApiKey);
const HomeScreen = () => {
  const { clientIsReady } = useChatClient();
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <View style={{ flex: 1, backgroundColor: "green" }}>
          {!clientIsReady && <Text>Loading</Text>}
          {clientIsReady && <Text>Success</Text>}
        </View>
      </Chat>
    </OverlayProvider>
  );
};

export default HomeScreen;

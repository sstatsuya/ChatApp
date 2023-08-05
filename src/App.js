import React from "react";
import { SafeAreaView, View } from "react-native";
import HomeScreen from "./container/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppContainer from "./navigator";
import { AppProvider } from "./AppContext";
import { StreamChat } from "stream-chat";
import { chatApiKey } from "./chatConfig";
import { Chat, OverlayProvider } from "stream-chat-react-native";

const chatClient = StreamChat.getInstance(chatApiKey);

const App = () => {
  return (
    <AppProvider>
      <OverlayProvider>
        <Chat client={chatClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
              <AppContainer />
            </SafeAreaView>
          </GestureHandlerRootView>
        </Chat>
      </OverlayProvider>
    </AppProvider>
  );
};

export default App;

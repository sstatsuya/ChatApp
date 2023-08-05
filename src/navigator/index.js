import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../container/home";
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
} from "stream-chat-react-native"; // Or stream-chat-expo
import { StreamChat } from "stream-chat";
import { chatApiKey, chatUserId, users } from "../chatConfig";
import { useAppContext } from "../AppContext";
import { useChatClient } from "../useChatClient";
import { ActivityIndicator, Text, View } from "react-native";
import StartScreen from "../container/start";

const Stack = createStackNavigator();

const sort = {
  last_message_at: -1,
};
const ChannelScreen = (props) => {
  const { channel } = useAppContext();
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

const ChannelListScreen = (props) => {
  const { setChannel, userIndex } = useAppContext();
  const { clientIsReady } = useChatClient(userIndex);
  if (!clientIsReady)
    return <ActivityIndicator size={"large"} color={"green"} />;
  return (
    <ChannelList
      filters={{
        members: {
          $in: [users[userIndex].chatUserId],
        },
      }}
      onSelect={(channel) => {
        const { navigation } = props;
        setChannel(channel);
        navigation.navigate("ChannelScreen");
      }}
    />
  );
};
const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="ChannelList" component={ChannelListScreen} />
      <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

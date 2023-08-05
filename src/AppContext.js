// AppContext.js

import React, { useState } from "react";

export const AppContext = React.createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
  userIndex: null,
  setUserIndex: (userIndex) => {},
});

export const AppProvider = ({ children }) => {
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();
  const [userIndex, setUserIndex] = useState();

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread, userIndex, setUserIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

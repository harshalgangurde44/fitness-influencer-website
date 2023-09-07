import { createContext, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Videos from "./components/Videos";

export const AppContext = createContext(null);

function App() {
  const [query, setQuery] = useState("");
  const [videosData, setVideosData] = useState([]);

  return (
    <AppContext.Provider value={{ query, videosData, setQuery, setVideosData }}>
      <Header />
      <Videos />
    </AppContext.Provider>
  );
}

export default App;

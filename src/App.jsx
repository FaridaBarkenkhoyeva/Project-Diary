import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

import EntriesList from "./EntriesList";

function App() {
  return (
    <>
      <Header />

      <EntriesList />
    </>
  );
}

export default App;

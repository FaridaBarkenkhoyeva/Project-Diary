import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import SortFilter from "./SortFilter";
import EntriesList from "./EntriesList";
import EntryCard from "./EntryCard";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import ViewEntryModal from "./ViewEntryModal";
import AddEntryModal from "./AddEntryModal";

function App() {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  //current Entry is empty
  const [currentEntry, setCurrentEntry] = useState(null);
  // make an array for Entries
  const [entries, setEntries] = useState([]);

  return (
    <>
      <Header />
      <Title />
      <SortFilter />
      <EntriesList />
      <SubmitButton />
    </>
  );
}

export default App;

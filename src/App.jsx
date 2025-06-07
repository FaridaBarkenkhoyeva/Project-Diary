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
  // const [showViewModal, setShowViewModal] = useState(false);
  // const [showAddModal, setShowAddModal] = useState(false);
  //current Entry is empty
  // const [currentEntry, setCurrentEntry] = useState(null);
  // make an array for Entries
  const [entries, setEntries] = useState([
     {
    title: "Morning Walk in the Park",
    date: "01/07/2025",
    imagePreviewUrl: "https://example.com/images/park-walk.jpg",
    fullText: "Today started with a peaceful walk through the park. Birds were chirping and the sun was just rising — felt like a reset button for my mind."
  },
  {
    title: "Unexpected Rain",
    date: "02/07/2025",
    imagePreviewUrl: "https://example.com/images/rainy-day.jpg",
    fullText: "Got caught in the rain without an umbrella. Drenched but smiling. It reminded me to let go and just enjoy the moment."
  },
  {
    title: "Coffee with an Old Friend",
    date: "03/07/2025",
    imagePreviewUrl: "https://example.com/images/coffee-friends.jpg",
    fullText: "Met Sam after 3 years. Laughed over silly memories and talked about where life has taken us. Grateful for lasting friendships."
  },
  {
    title: "Bookstore Treasure",
    date: "04/07/2025",
    imagePreviewUrl: "https://example.com/images/bookstore.jpg",
    fullText: "Stumbled into a hidden bookstore downtown. Found a signed copy of a childhood favorite. Pure serendipity!"
  },
  {
    title: "Late Night Reflections",
    date: "05/07/2025",
    imagePreviewUrl: "https://example.com/images/night-reflection.jpg",
    fullText: "Sat by the window watching the city lights. So many thoughts racing, but in that quiet moment, everything felt still and okay."
  }
  ]);
  // const entriesSorted = [{title:"", date:"", imagePreviewUrl:"", fullText:""}]

  const date = new Date().toUTCString();
  // const [(sortedEntries = entries.sort((a, b) => b.date - a.date)), setSortedEntries] = useState({ title: "", date: "", imagePreviewUrl: "", fullText: "" });
 
  
  return (
    <>

    
      <Header />
      <Title />
      <SortFilter />
      <EntriesList entries={entries}/>
      <SubmitButton />
    </>
  );
}

export default App;

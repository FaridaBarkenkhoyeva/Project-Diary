import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState(JSON.parse(localStorage.getItem("entries") || "[]"));
  const [selectedEntry, setSelectedEntry] = useState();
  function modalHandler(obj) {
    console.log(obj);
    setSelectedEntry(obj);

    document.getElementById("my_modal_6").showModal();
  }

  //In App.js, create a function that takes new entry data (from the form) and adds it to the entries state array.

  function saveToLocalStorage(newEntry) {
    const entriesRetrieved = localStorage.getItem("entries");
    const savedEntries = entriesRetrieved ? JSON.parse(entriesRetrieved) : [];

    savedEntries.push(newEntry);
    console.log(savedEntries);
    localStorage.setItem("entries", JSON.stringify(savedEntries));
    getDataFromLS();
    

  }

  const [entryData, setEntryData] = useState();

  const saveHandler = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const entryImage = e.target.image.value;
    const entryTitle = e.target.title.value;
    const entryText = e.target.entryText.value;

    if (!entryImage || !entryTitle || !date || !entryText) {
      alert("Please fill all fields before saving.")
      return; 
    }

    saveToLocalStorage({
      title: e.target.title.value,
      date,
      imageUrl: e.target.image.value,
      fullText: e.target.entryText.value,
    })
    document.getElementById("my_modal_5").close()

  };

  //retrieve information from ls
  // put in entriesList
  // append

  //create a container
  //const savedEntries = json.parse(localStorage.getItem('entries'))
  // for each savedEntries (entry => have html return)

  function getDataFromLS() {
    const data = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(data)
  }

  return (
    <AppContext.Provider
      value={{
        entries,
        setEntries,
        selectedEntry,
        setSelectedEntry,
        modalHandler,
        saveToLocalStorage,
        entryData,
        setEntryData,
        saveHandler,
        getDataFromLS
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entryData, setEntryData] = useState();
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries") || "[]")
  );
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

  const saveHandler = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    // const date = new Date().toLocaleDateString();
    const exists = entries.filter((i) => i.date == date);
    if (exists.length > 0) {
      alert("date already exists");
      return;
    }
    const entryImage = e.target.imagePreviewUrl.value;
    const entryTitle = e.target.title.value;
    const entryText = e.target.entryText.value;
    e.target.imagePreviewUrl.value = "";
    e.target.title.value = "";
    e.target.entryText.value = "";

    if (!entryImage || !entryTitle || !date || !entryText) {
      alert("Please fill all fields before saving.");
      return;
    }

    saveToLocalStorage({
      title: entryTitle,
      date,
      imageUrl: entryImage,
      fullText: entryText,
    });
    document.getElementById("my_modal_5").close();
  };

  function getDataFromLS() {
    const data = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(data);
  }

  //filter and sort
  const [sortEntries, setSortEntries] = useState("newest");
  const [filterType, setFilterType] = useState("none"); //can be none, date, title, text
  const [filterValue, setFilterValue] = useState(""); //when searching for something

  // sort by date
  const sortedEntries = [...entries].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    //if sortEntries is newest=> show newer ones
    if (sortEntries === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  const sortHandler = () => {
    setSortEntries(sortEntries === "newest" ? "oldest" : "newest");
  };

  //filter entries
  const filteredEntries = sortedEntries.filter((entry) => {
    //if no filter, show all
    if (filterType === "none" || !filterValue) {
      return true;
    }
  });

  const filterHandler = (type) => {
    setFilterType(type);
    setFilterValue("");
  };

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
        getDataFromLS,
        sortEntries,
        setSortEntries,
        filterType,
        setFilterType,
        filterValue,
        setFilterValue,
        sortedEntries,
        filteredEntries,
        sortHandler,
        filterHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

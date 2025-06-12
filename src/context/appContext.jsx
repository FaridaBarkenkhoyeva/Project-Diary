import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // states
  const [entryData, setEntryData] = useState();
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries") || "[]")
  );
  const [selectedEntry, setSelectedEntry] = useState();
  const [idToUpdate, setIdToUpdate] = useState("");

  // Funcitons
  function modalHandler(obj) {
    console.log(obj);
    setSelectedEntry(obj);

    document.getElementById("my_modal_6").showModal();
  }

  function updateHandler(obj) {
    setIdToUpdate(obj.id);

    // e.target.imagePreviewUrl.value = obj.imageUrl;
    // e.target.title.value = obj.title;
    // e.target.entryText.value = obj.fullText;

    const updateForm = document.getElementById("updateForm");

    document.getElementById("my_modal_5").showModal();

    console.log(updateForm[0]);
    updateForm[0].value = obj.imageUrl;
    updateForm[1].value = obj.date;
    updateForm[2].value = obj.title;
    updateForm[3].value = obj.fullText;
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
    const entryImage = e.target.imagePreviewUrl.value;
    const entryTitle = e.target.title.value;
    const entryText = e.target.entryText.value;

    if (idToUpdate != "") {
      const tempArray = entries.filter((i) => i.id != idToUpdate);

      const exists = tempArray.filter((i) => i.date == date);
      if (exists.length > 0) {
        alert("date already exists");
        return;
      }

      const UpdatedArray = entries.map((i) => {
        if (i.id == idToUpdate) {
          i.title = entryTitle;
          i.fullText = entryText;
          i.imageUrl = entryImage;
          i.date = date;
        }
        return i;
      });

      setIdToUpdate("");

      localStorage.setItem("entries", JSON.stringify(UpdatedArray));
      document.getElementById("my_modal_5").close();
      getDataFromLS();
      return;
    }

    e.target.imagePreviewUrl.value = "";
    e.target.title.value = "";
    e.target.entryText.value = "";
    e.target.date.value = "";
    // const date = new Date().toLocaleDateString();
    const exists = entries.filter((i) => i.date == date);
    if (exists.length > 0) {
      alert("date already exists");
      return;
    }

    if (!entryImage || !entryTitle || !date || !entryText) {
      alert("Please fill all fields before saving.");
      return;
    }

    saveToLocalStorage({
      id: uuidv4(),
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

  function deleteEntry(obj) {
     const updatedArray = entries.filter (i => i.id != obj.id)
    localStorage.setItem("entries", JSON.stringify(updatedArray));
    
    getDataFromLS();
    return;
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
        updateHandler,
        deleteEntry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

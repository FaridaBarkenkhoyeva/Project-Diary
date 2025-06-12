import React from "react";
import { useState } from "react";
import ViewEntryModal from "./ViewEntryModal";
import App from "./App";
import { useAppContext } from "./context/appContext";
import { v4 as uuidv4 } from 'uuid';
export default function EntriesList() {
  const {
    entries,
    modalHandler,
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
  } = useAppContext();

  return (
    <>
      <h1 className="text-center mt-8 mb-4 text-xl text-stone-800">
        My Entry List
      </h1>
      
      <div className="">
        <button
          className="btn btn-xs h-8 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          onClick={sortHandler}
        >
          Sort by Date (
          {sortEntries === "newest" ? "Newest First" : "Oldest First"})
        </button>
        <button
          className="btn btn-xs h-8 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          popoverTarget="popover-1"
        >
          Filter
        </button>
        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li>
            <select
              className="select select-bordered sleect-sm w-full"
              value={filterType}
              onChange={(e) => filterHandler(e.target.value)}
            >
              <option value="none">No Filter</option>
              <option value="date">Filter by Date</option>
              <option value="title">Filter by Title</option>
              <option value="text">Filter by Text</option>
            </select>
          </li>
          {filterType !== "none" && (
            <li className="mt-2">
              <input
                type="text"
                className="input input-bordered input-sm w-full"
                placeholder="Search by {filterType}"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </li>
          )}
        </ul>
      </div>

      <div>
        {entries.length > 0 ? (
          <div>
            <ul className=" list  bg-base-100 rounded-box ml-4 mr-4 mt-12 shadow-md">
              {entries?.map((entry, index) => (
                <li key={index} className="list-row">
                  <div>
                    <img className="size-10 rounded-box" src={entry.imageUrl} />
                  </div>
                  <div>
                    <div>{entry.title}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Mood
                    </div>
                  </div>
                  <p className="truncate max-width: 100% display: inline-block list-col-wrap text-xs">
                    {entry.fullText}
                  </p>
                  <p>{entry.date}</p>
                  <button className="btn btn-ghost" onClick={() => updateHandler(entry)}>Update</button>

                  <button className="btn btn-ghost" onClick={() => deleteEntry(entry)}>Delete</button>

                  <button className="btn" onClick={() => modalHandler(entry)}>
                    Open entry
                  </button>

                  {/* <ViewEntryModal entry={entry} /> */}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No entries yet. Add your first entry here!</p>
        )}
        <ViewEntryModal />
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
import ViewEntryModal from "./ViewEntryModal";
import App from "./App";

export default function EntriesList({ entries }) {
  //  const getCurrentDate = new Date();
  //  const [today, setToday] = useState(getCurrentDate());

  // make an array for Entries
  // const [entries, setEntries] = useState([
  //   { title: "", date: "", imagePreviewUrl: "", fullText: "" },
  // ]);
  // const entriesSorted = [{title:"", date:"", imagePreviewUrl:"", fullText:""}]

  return (
    <div>
      {entries.length > 0 ? (
        <div>
          <ul className=" list  bg-base-100 rounded-box ml-4 mr-4 mt-12 shadow-md">
            {entries.map((entry, index) => (
              <li key={index} className="list-row">
                <div>
                  <img
                    className="size-10 rounded-box"
                    src={entry.imagePreviewUrl}
                  />
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
                <button className="btn btn-ghost">Update</button>

                <button className="btn btn-ghost">Delete</button>

                <ViewEntryModal entries={entries} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No entries yet. Add your first entry here!</p>
      )}
    </div>
  );
}

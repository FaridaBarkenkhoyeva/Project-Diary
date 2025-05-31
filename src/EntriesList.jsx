import React from "react";

export default function EntriesList() {
  return (
    <>
      {/* <p>No entries yet.</p> */}

      <ul className=" list  bg-base-100 rounded-box ml-4 mr-4 mt-12 shadow-md">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li> */}

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Title</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Mood
            </div>
          </div>
          <p className="truncate max-width: 100% display: inline-block list-col-wrap text-xs">
            Diary entry text
          </p>
          <button className="btn btn-ghost">Update</button>

          <button className="btn btn-ghost">Delete</button>
        </li>
      </ul>
    </>
  );
}

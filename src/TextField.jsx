import React from "react";

export default function TextField() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        {/* <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure> */}

        <label className="input ml-8">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </g>
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Select image from your local computer"
          />
        </label>

        <div className="card-body items-center text-center">
          <input type="text" placeholder="Type Title here" className="input" />
          <textarea
            placeholder="Type entry text here"
            className="textarea textarea-md"
          ></textarea>

          <div className="card-actions">
            <button className="btn btn-primary">Save Entry</button>
          </div>
        </div>
      </div>
    </>
  );
}

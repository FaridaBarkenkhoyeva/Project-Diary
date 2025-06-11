import React from "react";
import { useAppContext } from "./context/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddEntryModal() {
  const { saveToLocalStorage, entryData, setEntryData, saveHandler } =
    useAppContext();

  return (
    <>
      <div className="">
        <button
          className="btn btn-xs h-10 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add new entry
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal-action">
              <form onSubmit={saveHandler}>
                <div className="card bg-base-100 w-96 shadow-sm">
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
                      type="url"
                      name="imagePreviewUrl"
                      className="grow"
                      placeholder="Select image from your local computer"
                    />
                  </label>

                  <div className="card-body items-center text-center">
                    <input
                      type="date"
                      name="date"
                      placeholder="Date"
                      className="input"
                    />

                    <input
                      type="text"
                      name="title"
                      placeholder="Type Title here"
                      className="input"
                    />

                    <textarea
                      type="text"
                      name="entryText"
                      placeholder="Type entry text here"
                      className="textarea textarea-md"
                    ></textarea>

                    <div className="card-actions">
                      <button className="btn btn-primary">Save Entry</button>
                    </div>
                  </div>
                </div>
              </form>
              <form method="dialog">
                <button className="btn">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

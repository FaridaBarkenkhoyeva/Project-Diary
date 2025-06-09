import React from "react";
import { useAppContext } from "./context/appContext";

export default function AddEntryModal() {
  const { saveToLocalStorage, entryData, setEntryData, saveHandler } = useAppContext();

  // const saveHandler = (e) => {
  //   e.preventDefault();

  //   console.log("I am saveHandler");
  // };


  
  return (
    <>
      <div className="">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
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
                      type="url"
                      name="image"
                      className="grow"
                      placeholder="Select image from your local computer"
                    />
                  </label>

                  <div className="card-body items-center text-center">
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
                      <button className="btn btn-primary">
                        Save Entry
                      </button>
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

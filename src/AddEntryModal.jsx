import React from "react";
import TextField from "./TextField";

export default function AddEntryModal() {
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
              <TextField />
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

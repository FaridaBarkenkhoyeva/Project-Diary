import React from "react";
import EntryCard from "./EntryCard";

export default function ViewEntryModal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_6").showModal()}
      >
        Open entry
      </button>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-width-4-xl max-h-[90vh] overflow-y-auto">
          <div className="modal-action">
            <EntryCard />
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn min-h-10 px-2 whitespace-nowrap bg-stone-300 ml-8">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

import React from "react";
import { useAppContext } from "./context/appContext";

export default function ViewEntryModal() {
  const { selectedEntry } = useAppContext();

  return (
    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box w-full max-width-4-xl max-h-[90vh] overflow-y-auto p-0">
        <div className="card-body items-center text-center ">
          <h2 className="card-title bg-stone-100 border-amber-100 rounded-md px-4 py-1 text-sm md:text-base lg:text-lg">
            {selectedEntry?.title}
          </h2>
        </div>
        <div className="flex gap-4 m-4 items-stretch">
          <div className="flex flex-col w-full ">
            <figure className="flex-1">
              <img
                src={selectedEntry?.imageUrl}
                alt="Shoes"
                className=" h-full w-full rounded-xl object-contain"
              />
            </figure>
            <div className="card-actions m-2 justify-start">
              <div className=" w-1/3 flex gap-2">
                <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                  Update
                </button>
                <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-2 ">
            <p className="text-xs md:text-sm lg:text-base">
              {" "}
              {selectedEntry?.fullText}
            </p>
            <p>{selectedEntry?.date}</p>
          </div>
        </div>

        <form method="dialog">
          <button className="absolute top-4 right-4 btn min-h-10 px-2 whitespace-nowrap bg-stone-300 ml-8">
            X
          </button>
        </form>
      </div>
    </dialog>
  );
}

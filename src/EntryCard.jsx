import React from "react";

export default function EntryCard() {
  return (
    <>
      <div className="card bg-base-100 w-full md:w-90% lg:w-90% xl:w-90% shadow-sm border-amber-100 mx-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title bg-stone-100 border-amber-100 rounded-md px-4 py-1 text-sm md:text-base lg:text-lg">
            Title of Entry
          </h2>
        </div>

        <div className="flex gap-4 m-4 items-stretch">
          <div className="flex flex-col w-full ">
            <figure className="flex-1">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta, voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, debitis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

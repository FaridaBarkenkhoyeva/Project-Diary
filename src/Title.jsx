import React from "react";

export default function Title() {
  return (
    <>
      <h1 className="text-center mt-8 mb-4 text-xl text-stone-800">
        My Entry List
      </h1>
      <div className="">
        <button className="btn btn-xs h-8 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Sort
        </button>

        <button className="btn btn-xs h-8 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Filter
        </button>
      </div>
    </>
  );
}

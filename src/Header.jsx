import React from "react";

export default function Header() {


  
  return (
    <>
      {/* <form onSubmit={onSubmitHandler}>
        <input type="date" />
        <input type="time" />
        <input type="color" />

        <button type="Submit"> Submit</button>
      </form> */}

      <div className="navbar bg-stone-700 shadow-sm">
        <button className="btn btn-xs h-10 bg-stone-300 ml-8 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Add New Entry
        </button>
        <div className="flex-1">
          <a className="text-xl text-stone-300 flex justify-center">My Diary</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

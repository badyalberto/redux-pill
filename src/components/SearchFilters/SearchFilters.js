import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchFilters = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex justify-between">
        <form method="POST" action="" className="w-2/4">
          <div className="flex content-center">
            <input className="bg-gray-300 p-1 pl-3 w-3/4" type="text" placeholder="Search" value={search} onChange={({ target }) => setSearch(target.value)}></input>
            <button className="border bg-orange-400 text-white font-bold">
              <HiSearch className="w-7 h-7 border-0" />
            </button>
          </div>
        </form>
        <div className="w-2/4">
          <div className="flex justify-end items-center">
            <img
              className="inline object-cover w-8 h-8 rounded-full mr-3"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile"
            />
            <span className="font-bold">Antonio</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

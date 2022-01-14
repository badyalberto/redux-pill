import interior1 from "../../images/interior1.jpg";
import { HiOutlineTrash } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { IoSquareOutline } from "react-icons/io5";

const Results = () => {
  return (
    <div className="shadow-lg mt-10 p-5">
      {/* Headers*/}
      <div className="grid grid-cols-6 gap-1">
        <div>
          <h1 className="text-gray-400 font-semibold py-2 ">Image</h1>
        </div>
        <div>
          <h1 className="text-gray-400 font-semibold py-2">Address</h1>
        </div>
        <div>
          <h1 className="text-gray-400 font-semibold py-2">Price</h1>
        </div>
        <div>
          <h1 className="text-gray-400 font-semibold py-2">Characteristics</h1>
        </div>
        <div>
          <h1 className="text-gray-400 font-semibold py-2 text-center">Mark as Sold</h1>
        </div>
        <div>
          <h1 className="text-gray-400 font-semibold py-2 text-center">Remove</h1>
        </div>
      </div>
      {/* FIN Headers*/}
      {/* FLAT*/}
      <div className="grid grid-cols-6 gap-1 mb-3">
        <div>
          <div>
            <div className="w-3/4">
              <img src={interior1} className="rounded shadow-lg" alt="house"></img>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <div className="font-bold py-1 leading-loose">382 W King Edward Ave</div>
            <div className="text-gray-400 py-1 leading-loose">Shaughnessy, BC</div>
          </div>
        </div>
        <div>
          <div className="text-orange-400 h-3/5 flex items-center">
            <p>$457,000</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between h-3/5 items-center">
            <div>
              <BiBed className="text-gray-400 inline-block" />
              <span className="text-gray-400">2</span>
            </div>
            <div>
              <BiBath className="text-gray-400 inline-block" />
              <span className="text-gray-400 ">1</span>
            </div>
            <div>
              <IoSquareOutline className="text-gray-400 inline-block" />
              <span className="text-gray-400">67 m2</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <BsCoin className="text-gray-400" />
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <HiOutlineTrash className="text-gray-400" />
          </div>
        </div>
      </div>
      {/* FIN FLAT */}
      <div className="grid grid-cols-6 gap-1 mb-3">
        <div>
          <div>
            <div className="w-3/4">
              <img src={interior1} className="rounded shadow-lg" alt="house"></img>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <div className="font-bold py-1 leading-loose">382 W King Edward Ave</div>
            <div className="text-gray-400 py-1 leading-loose">Shaughnessy, BC</div>
          </div>
        </div>
        <div>
          <div className="text-orange-400 h-3/5 flex items-center">
            <p>$457,000</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between h-3/5 items-center">
            <div>
              <BiBed className="text-gray-400 inline-block" />
              <span className="text-gray-400">2</span>
            </div>
            <div>
              <BiBath className="text-gray-400 inline-block" />
              <span className="text-gray-400 ">1</span>
            </div>
            <div>
              <IoSquareOutline className="text-gray-400 inline-block" />
              <span className="text-gray-400">67 m2</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <BsCoin className="text-gray-400" />
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <HiOutlineTrash className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1 mb-3">
        <div>
          <div>
            <div className="w-3/4">
              <img src={interior1} className="rounded shadow-lg" alt="house"></img>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <div className="font-bold py-1 leading-loose">382 W King Edward Ave</div>
            <div className="text-gray-400 py-1 leading-loose">Shaughnessy, BC</div>
          </div>
        </div>
        <div>
          <div className="text-orange-400 h-3/5 flex items-center">
            <p>$457,000</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between h-3/5 items-center">
            <div>
              <BiBed className="text-gray-400 inline-block" />
              <span className="text-gray-400">2</span>
            </div>
            <div>
              <BiBath className="text-gray-400 inline-block" />
              <span className="text-gray-400 ">1</span>
            </div>
            <div>
              <IoSquareOutline className="text-gray-400 inline-block" />
              <span className="text-gray-400">67 m2</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <BsCoin className="text-gray-400" />
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <HiOutlineTrash className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1 mb-3">
        <div>
          <div>
            <div className="w-3/4">
              <img src={interior1} className="rounded shadow-lg" alt="house"></img>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <div className="font-bold py-1 leading-loose">382 W King Edward Ave</div>
            <div className="text-gray-400 py-1 leading-loose">Shaughnessy, BC</div>
          </div>
        </div>
        <div>
          <div className="text-orange-400 h-3/5 flex items-center">
            <p>$457,000</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between h-3/5 items-center">
            <div>
              <BiBed className="text-gray-400 inline-block" />
              <span className="text-gray-400">2</span>
            </div>
            <div>
              <BiBath className="text-gray-400 inline-block" />
              <span className="text-gray-400 ">1</span>
            </div>
            <div>
              <IoSquareOutline className="text-gray-400 inline-block" />
              <span className="text-gray-400">67 m2</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <BsCoin className="text-gray-400" />
          </div>
        </div>
        <div>
          <div className="flex h-3/5 justify-center items-center">
            <HiOutlineTrash className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

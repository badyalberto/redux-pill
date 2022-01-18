import interior1 from "../../images/interior1.jpg";
import { HiOutlineTrash } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { IoSquareOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../redux/properties/actions";
import { useLocation } from "react-router";


const Results = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);
  const stateProperties = useSelector((state) => state.properties);
  const location = useLocation();
  const url = location.search.split("&");

  useEffect(() => {
    const searchDuplicateFilter = () => {
      let result = url.filter((item, index) => {
        return url.indexOf(item) === index;
      });
  
      return result.toString().replace(",", "&");
    };
    const filters = searchDuplicateFilter();
    dispatch(fetchProperties(state, filters));
  }, [dispatch,state]);

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
      {stateProperties.length > 0 ? (
        stateProperties.map((item) => (
          <div className="grid grid-cols-6 gap-1 mb-3" key={item.id}>
            <div>
              <div>
                <div className="w-3/4">
                  <img src={interior1} className="rounded shadow-lg" alt="house"></img>
                </div>
              </div>
            </div>
            <div>
              <div className="pt-2">
                <div className="font-bold py-1 leading-loose"> {item.street} </div>
                <div className="text-gray-400 py-1 leading-loose">
                  {item.city},{item.country}
                </div>
              </div>
            </div>
            <div>
              <div className="text-orange-400 h-3/5 flex items-center">
                <p>${item.price}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between h-3/5 items-center">
                <div>
                  <BiBed className="text-gray-400 inline-block" />
                  <span className="text-gray-400">{item.room} </span>
                </div>
                <div>
                  <BiBath className="text-gray-400 inline-block" />
                  <span className="text-gray-400 ">{item.bath}</span>
                </div>
                <div>
                  <IoSquareOutline className="text-gray-400 inline-block" />
                  <span className="text-gray-400"> {item.size} m2</span>
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
        ))
      ) : <span>Not Found</span>}
    </div>
  );
};

export default Results;

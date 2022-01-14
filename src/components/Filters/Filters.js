import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTypeOfHome, changeCondition, changeBedrooms/* changeRangePrice */, changeBathrooms, changePublicationDate, changeEquipament, changeMoreFilters } from "../../redux/filters/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const [flat_apartament, setFlatApartament] = useState(false);
  const handleClick = () => {
    console.log(flat_apartament);
    setFlatApartament(!flat_apartament);
  };

  return (
    <div className="flex mt-10 shadow-xl pt-2 pb-10">
      <div className="w-1/4 px-5">
        <div className="flex flex-col">
          <div className="py-3">
            <h3 className="block font-semibold">Type of home</h3>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/4">
                <div className="form-check">
                  <input
                    id="flat_apartament"
                    type="checkbox"
                    checked={flat_apartament}
                    name="flat_apartament"
                    value="flat_apartament"
                    className="form-check-input"
                    onChange={(e) => {
                      e.preventDefault();
                      handleClick();
                      dispatch(changeTypeOfHome(e.target.value));
                    }}
                  />
                  <label htmlFor="flat_apartament" className="pl-1">
                    Flat/Apartament
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="house"
                    type="checkbox"
                    name="house"
                    value="house"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeTypeOfHome(e.target.value));
                    }}
                  />
                  <label htmlFor="house" className="p-1">
                    House
                  </label>
                </div>
              </div>
              <div className="w-2/4">
                <div className="form-check">
                  <input
                    id="duplex"
                    type="checkbox"
                    name="duplex"
                    value="duplex"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeTypeOfHome(e.target.value));
                    }}
                  />
                  <label htmlFor="duplex" className="pl-1">
                    Duplex
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="penthouse"
                    type="checkbox"
                    name="penthouse"
                    value="penthouse"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeTypeOfHome(e.target.value));
                    }}
                  />
                  <label htmlFor="penthouse" className="pl-1">
                    Penthouse
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h3 className="block font-semibold">Condition</h3>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/4">
                <div className="form-check">
                  <input
                    id="new_homes"
                    type="checkbox"
                    name="new_homes"
                    className="form-check-input"
                    value="new_homes"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeCondition(e.target.value));
                    }}
                  />
                  <label htmlFor="new_homes" className="pl-1">
                    New homes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="renovation"
                    type="checkbox"
                    name="renovation"
                    value="renovation"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeCondition(e.target.value));
                    }}
                  />
                  <label htmlFor="renovation" className="p-1">
                    Needs renovation
                  </label>
                </div>
              </div>
              <div className="w-2/4">
                <div className="form-check">
                  <input
                    id="good_condition"
                    type="checkbox"
                    value="good_condition"
                    name="good_condition"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeCondition(e.target.value));
                    }}
                  />
                  <label htmlFor="good_condition" className="pl-1">
                    Good condition
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 px-5">
        <div className="py-3">
          <h1 className="block font-bold ">Bedrooms</h1>
          <div className="flex justify-between">
            <div className="form-check">
              <input
                id="bed-0"
                type="checkbox"
                name="room"
                value="0"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBedrooms(e.target.value));
                }}
              />
              <label htmlFor="bed-0" className="p-1">
                0 (Studio flat)
              </label>
            </div>
            <div className="form-check">
              <input
                id="bed-1"
                type="checkbox"
                value="1"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBedrooms(e.target.value));
                }}
              />
              <label htmlFor="bed-1" className="p-1">
                1
              </label>
            </div>
            <div className="form-check">
              <input
                id="bed-2"
                type="checkbox"
                value="2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBedrooms(e.target.value));
                }}
              />
              <label htmlFor="bed-2" className="p-1">
                2
              </label>
            </div>
            <div className="form-check">
              <input
                id="bed-3"
                type="checkbox"
                value="3"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBedrooms(e.target.value));
                }}
              />
              <label htmlFor="bed-3" className="p-1">
                3
              </label>
            </div>
            <div className="form-check">
              <input
                id="bed-4"
                type="checkbox"
                value="4+"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBedrooms(e.target.value));
                }}
              />
              <label htmlFor="bed-4" className="p-1">
                4 or +
              </label>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h1 className="block font-bold py-3">Price Range</h1>
          <div className="flex">
            <div className="flex">
              <input type="number" className="font-bold border rounded block w-2/4" name="min_price" onChange="" />
              <span className="font-bold block px-2"> - </span>
              <input type="number" className="font-bold border rounded block w-2/4" name="max_price" onChange="" />
            </div>
          </div>
          <div className="flex py-3">
            <input className="block w-full" type="range" onChange="" />
          </div>
        </div>
      </div>
      <div className="w-1/4 px-5">
        <div className="py-3">
          <h1 className="block font-bold ">Bathrooms</h1>
          <div className="flex justify-between">
            <div className="form-check">
              <input
                type="checkbox"
                name="bath-1"
                id="bath-1"
                value="1"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBathrooms(e.target.value));
                }}
              />
              <label htmlFor="bath-1" className="p-1">
                1
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="bath-2"
                id="bath-2"
                value="2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBathrooms(e.target.value));
                }}
              />
              <label htmlFor="bath-2" className="p-1">
                2
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="bath-3"
                id="bath-3"
                value="3+"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeBathrooms(e.target.value));
                }}
              />
              <label htmlFor="bath-3" className="p-1">
                3 or +
              </label>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h1 className="block font-bold py-3">Publication date</h1>
          <div className="flex">
            <select
              name="publication_date"
              className="border w-full py-2 rounded"
              onChange={(e) => {
                e.preventDefault();
                dispatch(changePublicationDate(e.target.value));
              }}
            >
              <option value="48">Last 48 Hours</option>
              <option value="24">Last 24 Hours</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-1/4 px-5">
        <div className="py-3">
          <h1 className="block font-bold ">Equipament</h1>
          <div className="flex">
            <select
              name="equipament"
              className="border w-full py-2 rounded"
              onChange={(e) => {
                e.preventDefault();
                dispatch(changeEquipament(e.target.value));
              }}
            >
              <option value="indiferent">Indiferent</option>
              <option value="full">Full</option>
            </select>
          </div>
        </div>
        <div className="py-3">
          <h1 className="block font-bold py-3">More Filters</h1>
          <div className="flex flex-col">
            <div className="flex">
              <div className="form-check w-2/4">
                <input
                  id="pets_allow"
                  type="checkbox"
                  name="pets_allow"
                  value="pets_allow"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="pets_allow" className="pl-1">
                  Pets allow
                </label>
              </div>
              <div className="form-check w-2/4">
                <input
                  id="lift"
                  type="checkbox"
                  name="lift"
                  value="lift"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="lift" className="p-1">
                  Lift
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="form-check w-2/4">
                <input
                  id="garden"
                  type="checkbox"
                  name="garden"
                  value="garden"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="garden" className="pl-1">
                  Garden
                </label>
              </div>
              <div className="form-check w-2/4">
                <input
                  id="air_conditioning"
                  type="checkbox"
                  name="air_conditioning"
                  value="air_conditioning"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="air_conditioning" className="pl-1">
                  Air conditioning
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="form-check w-2/4">
                <input
                  id="swimming_pool"
                  type="checkbox"
                  name="swimming_pool"
                  value="swimming_pool"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="swimming_pool" className="pl-1">
                  Swimming pool
                </label>
              </div>
              <div className="form-check w-2/4">
                <input
                  id="terrace"
                  type="checkbox"
                  name="terrace"
                  value="terrace"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(changeMoreFilters(e.target.value));
                  }}
                />
                <label htmlFor="terrace" className="pl-1">
                  Terrace
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

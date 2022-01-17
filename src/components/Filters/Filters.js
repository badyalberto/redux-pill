import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTypeOfHome, changeCondition, changeBedrooms, changeRangePrice, changeBathrooms, changePublicationDate, changeEquipament, changeMoreFilters } from "../../redux/filters/actions";

const Filters = () => {
  const state = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [min_price, setMinPrice] = useState();
  const [max_price, setMaxPrice] = useState();

  return (
    <div className="flex mt-10 shadow-xl pt-2 pb-10">
      <div className="w-1/4 px-5">
        <div className="flex flex-col">
          <div className="py-3">
            <h3 className="block font-semibold">Type of home</h3>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/4">
                <div className="form-check">
                  <label htmlFor="flat_apartament" className="inline-flex items-center indent-1">
                    <input
                      id="flat_apartament"
                      type="checkbox"
                      checked={state.type_of_home.includes("flat/apartament")}
                      value="flat/apartament"
                      name="flat_apartament"
                      className="accent-green-500 h-5 w-5"
                      onChange={(e) => dispatch(changeTypeOfHome(e.target.value))}
                    />
                    Flat/Apartament
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="house" className="inline-flex items-center indent-1">
                    <input
                      id="house"
                      className="accent-green-500 h-5 w-5 "
                      type="checkbox"
                      name="house"
                      value="house"
                      checked={state.type_of_home.includes("house")}
                      onChange={(e) => dispatch(changeTypeOfHome(e.target.value))}
                    />
                    House
                  </label>
                </div>
              </div>
              <div className="w-2/4">
                <div className="form-check">
                  <label htmlFor="duplex" className="inline-flex items-center indent-1">
                    {" "}
                    <input
                      id="duplex"
                      type="checkbox"
                      className="accent-green-500 h-5 w-5"
                      name="duplex"
                      value="duplex"
                      checked={state.type_of_home.includes("duplex")}
                      onChange={(e) => dispatch(changeTypeOfHome(e.target.value))}
                    />
                    Duplex
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="penthouse" className="inline-flex items-center indent-1">
                    {" "}
                    <input
                      id="penthouse"
                      type="checkbox"
                      name="penthouse"
                      value="penthouse"
                      className="accent-green-500 h-5 w-5"
                      checked={state.type_of_home.includes("penthouse")}
                      onChange={(e) => dispatch(changeTypeOfHome(e.target.value))}
                    />
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
                  <label htmlFor="new_homes" className="inline-flex items-center indent-1">
                    {" "}
                    <input
                      id="new_homes"
                      type="checkbox"
                      name="new_homes"
                      className="accent-green-500 h-5 w-5"
                      value="new_homes"
                      checked={state.condition.includes("new_homes")}
                      onChange={(e) => dispatch(changeCondition(e.target.value))}
                    />
                    New homes
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="renovation" className="inline-flex items-center indent-1">
                    {" "}
                    <input
                      id="renovation"
                      type="checkbox"
                      name="renovation"
                      value="renovation"
                      className="accent-green-500 h-5 w-5"
                      checked={state.condition.includes("renovation")}
                      onChange={(e) => dispatch(changeCondition(e.target.value))}
                    />
                    Needs renovation
                  </label>
                </div>
              </div>
              <div className="w-2/4">
                <div className="form-check">
                  <label htmlFor="good_condition" className="inline-flex items-center indent-1">
                    {" "}
                    <input
                      id="good_condition"
                      type="checkbox"
                      value="good_condition"
                      name="good_condition"
                      className="accent-green-500 h-5 w-5"
                      checked={state.condition.includes("good_condition")}
                      onChange={(e) => dispatch(changeCondition(e.target.value))}
                    />
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
              <label htmlFor="bed-0" className="inline-flex items-center indent-1">
                <input
                  id="bed-0"
                  className="accent-green-500 h-5 w-5"
                  type="checkbox"
                  name="room"
                  value="0"
                  checked={state.bedrooms.includes(0)}
                  onChange={(e) => dispatch(changeBedrooms(e.target.value))}
                />
                0 (Studio flat)
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bed-1" className="inline-flex items-center indent-1">
                {" "}
                <input id="bed-1" type="checkbox" className="accent-green-500 h-5 w-5" value="1" checked={state.bedrooms.includes(1)} onChange={(e) => dispatch(changeBedrooms(e.target.value))} />1
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bed-2" className="inline-flex items-center indent-1">
                <input id="bed-2" type="checkbox" className="accent-green-500 h-5 w-5" value="2" checked={state.bedrooms.includes(2)} onChange={(e) => dispatch(changeBedrooms(e.target.value))} />2
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bed-3" className="inline-flex items-center indent-1">
                <input id="bed-3" type="checkbox" value="3" className="accent-green-500 h-5 w-5" checked={state.bedrooms.includes(3)} onChange={(e) => dispatch(changeBedrooms(e.target.value))} />3
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bed-4" className="inline-flex items-center indent-1">
                <input id="bed-4" type="checkbox" className="accent-green-500 h-5 w-5" value="4" checked={state.bedrooms.includes(4)} onChange={(e) => dispatch(changeBedrooms(e.target.value))} />4 or
                +
              </label>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h1 className="block font-bold py-3">Price Range</h1>
          <div className="flex">
            <div className="flex">
              <input
                type="number"
                value={min_price}
                className="font-bold border rounded block w-2/4"
                name="min_price"
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  dispatch(changeRangePrice({ min: e.target.value }));
                }}
              />
              <span className="font-bold block px-2"> - </span>
              <input
                type="number"
                value={max_price}
                className="font-bold border rounded block w-2/4"
                name="max_price"
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  dispatch(changeRangePrice({ max: e.target.value }));
                }}
              />
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
              <label htmlFor="bath-1" className="inline-flex items-center indent-1">
                <input
                  type="checkbox"
                  className="accent-green-500 h-5 w-5"
                  name="bath-1"
                  id="bath-1"
                  value="1"
                  checked={state.bathrooms.includes(1)}
                  onChange={(e) => dispatch(changeBathrooms(e.target.value))}
                />
                1
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bath-2" className="inline-flex items-center indent-1">
                <input
                  type="checkbox"
                  className="accent-green-500 h-5 w-5"
                  name="bath-2"
                  id="bath-2"
                  value="2"
                  checked={state.bathrooms.includes(2)}
                  onChange={(e) => dispatch(changeBathrooms(e.target.value))}
                />
                2
              </label>
            </div>
            <div className="form-check">
              <label htmlFor="bath-3" className="inline-flex items-center indent-1">
                <input
                  type="checkbox"
                  className="accent-green-500 h-5 w-5"
                  name="bath-3"
                  id="bath-3"
                  value="3"
                  checked={state.bathrooms.includes(3)}
                  onChange={(e) => dispatch(changeBathrooms(e.target.value))}
                />
                3 or +
              </label>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h1 className="block font-bold py-3">Publication date</h1>
          <div className="flex">
            <select name="publication_date" className="border w-full py-2 rounded" onChange={(e) => dispatch(changePublicationDate(e.target.value))}>
              <option value="48">Last 48 Hours</option>
              <option value="24">Last 24 Hours</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-1/4 px-5">
        <div className="py-3">
          <h1 className="block font-bold pb-3">Equipament</h1>
          <div className="flex">
            <select name="equipament" className="border w-full py-2 rounded" onChange={(e) => dispatch(changeEquipament(e.target.value))}>
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
                <label htmlFor="pets_allow" className="inline-flex items-center indent-1">
                  <input
                    id="pets_allow"
                    type="checkbox"
                    name="pets_allow"
                    value="pets_allow"
                    className="accent-green-500 h-5 w-5"
                    checked={state.more_filters.includes("pets_allow")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
                  Pets allow
                </label>
              </div>
              <div className="form-check w-2/4">
                <label htmlFor="lift" className="inline-flex items-center indent-1">
                  <input
                    id="lift"
                    type="checkbox"
                    className="accent-green-500 h-5 w-5"
                    name="lift"
                    value="lift"
                    checked={state.more_filters.includes("lift")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
                  Lift
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="form-check w-2/4">
                <label htmlFor="garden" className="inline-flex items-center indent-1">
                  <input
                    id="garden"
                    className="accent-green-500 h-5 w-5"
                    type="checkbox"
                    name="garden"
                    value="garden"
                    checked={state.more_filters.includes("garden")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
                  Garden
                </label>
              </div>
              <div className="form-check w-2/4">
                <label htmlFor="air_conditioning" className="inline-flex items-center indent-1">
                  <input
                    id="air_conditioning"
                    type="checkbox"
                    name="air_conditioning"
                    value="air_conditioning"
                    className="accent-green-500 h-5 w-5"
                    checked={state.more_filters.includes("air_conditioning")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
                  Air conditioning
                </label>
              </div>
            </div>
            <div className="flex">
              <div className="form-check w-2/4">
                <label htmlFor="swimming_pool" className="inline-flex items-center indent-1">
                  {" "}
                  <input
                    id="swimming_pool"
                    type="checkbox"
                    name="swimming_pool"
                    value="swimming_pool"
                    className="accent-green-500 h-5 w-5"
                    checked={state.more_filters.includes("swimming_pool")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
                  Swimming pool
                </label>
              </div>
              <div className="form-check w-2/4">
                <label htmlFor="terrace" className="inline-flex items-center indent-1">
                  <input
                    id="terrace"
                    className="accent-green-500 h-5 w-5"
                    type="checkbox"
                    name="terrace"
                    value="terrace"
                    checked={state.more_filters.includes("terrace")}
                    onChange={(e) => dispatch(changeMoreFilters(e.target.value))}
                  />
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

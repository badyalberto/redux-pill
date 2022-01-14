import house1 from "../../images/house1.jpg";
import house2 from "../../images/house2.jpg";
import house3 from "../../images/house3.jpg";
import house4 from "../../images/house4.jpg";
import SearchHome from "../SearchHome/SearchHome";

const Home = () => {
  return (
    <div className="pt-10">
      <div className="flex">
        <div className="w-2/4">
          <div>
            <h1 className="block text-4xl mb-5 font-mono">Labore excepteur quis aliqua incididunt ad qui ut tempore.</h1>
            <span className="block">
              Occaecat veniam qui dolor quis officia. Duis magna eiusmod proident incididunt minim excepteur est ipsum veniam amet enim. Irure ex incididunt tempor velit commodo. Consectetur duis ad
              pariatur exercitation ipsum in labore amet. Sunt deserunt in nisi duis amet elit aliqua irure aliquip anim tempor ea sint. Proident officia cupidatat exercitation consequat mollit dolor
              consectetur dolor ex aliqua quis fugiat. Nulla sit ut velit reprehenderit culpa dolore qui.
            </span>
          </div>
        </div>
        <SearchHome />
      </div>
      <div className="py-5 font-bold text-xl">Popular Listing</div>
      <div className="flex">
        <div className="w-2/4 mr-8">
          <h1 className="text-lg font-bold pb-2">Buy</h1>
          <div className="flex">
            <img className="block w-2/4 max-h-44 object-fill mr-2"  alt="house" src={house1}></img>
            <img className="block w-2/4 max-h-44 object-fill"  alt="house" src={house2}></img>
          </div>
        </div>
        <div className="w-2/4">
          <h1 className="text-lg font-bold pb-2">Rent</h1>
          <div className="flex">
            <img className="block w-2/4 max-h-44 object-fill mr-2" alt="house" src={house3}></img>
            <img className="block w-2/4 max-h-44 object-fill" alt="house" src={house4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

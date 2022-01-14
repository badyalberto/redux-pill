import withLayout from "../../hoc/withLayout";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import Filters from "../../components/Filters/Filters";
import Results from "../../components/Results/Results";

const FiltersPage = () => {
  return (
    <div className="pt-5 mb-5">
      <SearchFilters />
      <Filters />
      <Results />
    </div>
  );
};

export default withLayout(FiltersPage);

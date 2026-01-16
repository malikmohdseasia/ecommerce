import { SearchIco } from "../assets/Icons";

const Searchbar = ({ searchShow, setSearchShow, searchItem, setSearchItem }: any) => {
  return (
    <div
      className={`
        rounded-full border border-footer flex items-center px-3 mt-5 lg:mt-0 xl:mt-0 ml-0 
        transition-all duration-300 ease-in-out overflow-hidden
        ${searchShow 
          ? "w-40 xl:w-50 opacity-100 mx-2"
          : "w-0 opacity-0 mx-0 border-transparent"}
      `}
    >
      <input
        type="search"
        placeholder="Search..."
        className="outline-none w-full bg-transparent text-sm p-1"
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
      />

      <button
        onClick={() => setSearchShow(false)}
        className="cursor-pointer ml-2"
      >
        {SearchIco}
      </button>
    </div>
  );
};

export default Searchbar;

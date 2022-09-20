import { FaSearch } from 'react-icons/fa';


function Search() {
  return (
    <div className="search-bar w-100 d-flex align-items-center px-3 py-2">
      <FaSearch />
      <input type="text" placeholder="Search by account name or website" aria-label="Search" className="form-control px-3 py-2 border-0 shadow-none" />
    </div>
  );
}

export default Search;

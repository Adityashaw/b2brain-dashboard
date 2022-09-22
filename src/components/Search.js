import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import CompanyCard from './CompanyCard';
import QuickActions from './QuickActions';


function Search(props) {
  const sampleData = [
    {
      company: "Harrow Inc", // this is name of the company
      slug: "harrow-inc6", // unique id of company
      logo: '/assets/img/sample-logo.png',
      website: "www.harrow.com",
    },
    {
      company: "Harrow Inc",
      slug: "harrow-inc7", 
      logo: '/assets/img/sample-logo.png',
      website: "www.harrow.com",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [companyData, setCompanyData] = useState(sampleData);
  return (
    <div>
      <div
        className="search-bar w-100 d-flex align-items-center px-3 py-2">
        {props.searchFocused ?
          <button
            className="btn shadow-none p-0"
            onClick={() => {
              props.setSearchFocused(false);
              setSearchInput("");
            }}
            >
              <FaTimes /></button> 
          :
          <FaSearch />
        }
        <input
          type="text"
          value={searchInput}
          placeholder="Search by account name or website"
          aria-label="Search"
          className="form-control px-3 py-2 border-0 shadow-none" 
          onClick={() => props.setSearchFocused(true)}
          onChange={() => props.setSearchFocused(true)}
        />
      </div>
      <section
        className={props.searchFocused ? "ps-5 row": "ps-5 row collapse"}
      >
        <div className="col col-sm-8 col-lg-9">
          <h4 className="text-muted fw-bold">Similar Accounts</h4>
          <div className="card-group">
            {companyData.map((e) => (
              <CompanyCard company={e} />
            ))}
          </div>
        </div>
        <div className="col col-sm-4 col-lg-3">
          <h4 className="text-muted fw-bold mb-4">Quick Actions</h4>
          <QuickActions />
        </div>
      </section>
    </div>
  );
}

export default Search;

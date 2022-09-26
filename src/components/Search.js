import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import CompanyCard from './CompanyCard';
import QuickActions from './QuickActions';


async function getCompanyDataFromAPI(searchURL, searchInput, abortSignal) {
  try {
    const response = await axios.get(searchURL, {
      params: {
        q: searchInput
      },
      signal: abortSignal
    });
    return await response.data;
  }
  catch (error) {
    if (error.response) {
      console.log(error.response);
    }
    else if (error.request) {
      console.log(error.request);
    }
    else {
      console.log(error);
    }
  }
}


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
  const searchURL = 'https://staging.staging.b2brain.com/search/autocomplete_org_all/';
  let abortController = new AbortController(); // required for cancelling old request
  return (
    <div>
      <div
        className="search-bar w-100 d-flex align-items-center px-3 py-2">
        {props.searchFocused ?
          <button
            className="btn shadow-none p-0"
            onClick={() => { // x on click must clear text in search bar and close the popup
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
          onChange={event => {
            //props.setSearchFocused(true) //do we need to set it to true on every change?
            setSearchInput(event.target.value);
            abortController.abort(); // cancel previous request
            abortController = new AbortController();
            // make new request and then set the state
            getCompanyDataFromAPI(searchURL, searchInput, abortController.signal)
              .then(data => data && setCompanyData(data))
              .catch(error => console.log(error));
          }
          }
        />
      </div>
      <section
        className={props.searchFocused ? "ps-5 row": "ps-5 row collapse"}
      >
        <div className="col col-sm-8 col-lg-9">
          <h4 className="text-muted fw-bold">Similar Accounts</h4>
          <div className="row flex-row">
            {companyData.map((e) => (
              <CompanyCard
                company={e}
                key={e.slug}
              />
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

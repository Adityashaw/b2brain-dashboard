import { useState } from 'react';
import { FaRegBell, FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import SearchResultSection from './SearchResultSection';


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
        className="search-bar w-100 d-flex position-relative align-items-center ps-3 py-2">
        {props.searchFocused ?
          <button
            className="btn shadow-none px-1"
            onClick={() => { // x on click must clear text in search bar and close the popup
              props.setSearchFocused(false);
              setSearchInput("");
            }}
          >
            <FaTimes className="opacity-25" size="1.5rem"/></button> 
            :
            <FaSearch className="opacity-25" size="1.5rem"/>
        }
        <input
          type="text"
          value={searchInput}
          placeholder="Search by account name or website"
          aria-label="Search"
          className="form-control px-3 py-2 border-0 shadow-none" 
          onClick={() => props.setSearchFocused(true)}
          onChange={event => {
            props.setSearchFocused(true) //do we need to set it to true on every change?
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
        <div className="d-flex gap-2 justify-content-evenly align-items-center">
          <div className="px-2 py-1 bell-icon rounded position-relative">
            <FaRegBell />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </div>
          <div className="ps-2 py-2">
            <img className="w-75 rounded border border-light" src="/assets/img/sample-logo.png" alt="logo"/>
          </div>
        </div>
      </div>
      <SearchResultSection searchFocused={props.searchFocused} companyData={companyData} />
    </div>
  );
}

export default Search;

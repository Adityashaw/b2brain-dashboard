import { useState } from 'react';

import Search from './Search';

function Main() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (

    <main className="col-8 col-md-9 ms-auto col-lg-10">
      <Search
        searchFocused={searchFocused}
        setSearchFocused={setSearchFocused}
      />
      <section
        className={searchFocused ? "collapse" : ""}
      >
        <img
          className="w-100"
          src="/assets/img/hero-image.png" alt="Hero"
        />
        <img
          className="w-100"
          src="/assets/img/clients.png" alt="Client"
        />
        <img
          className="w-100"
          src="/assets/img/feedback.png" alt="Customer Feedback"
        />
      </section>
    </main>
  );
}

export default Main;

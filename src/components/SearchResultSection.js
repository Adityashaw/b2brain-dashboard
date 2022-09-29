import CompanyCard from './CompanyCard';
import QuickActions from './QuickActions';


function SearchResultSection(props) {
  return (
    <section
      className={props.searchFocused ? "ps-5 mt-5 row": "ps-5 mt-5 row collapse"}
    >
      <div className="col col-sm-8 col-lg-9">
        <h4 className="text-muted fw-bold">Similar Accounts</h4>
        <div className="row flex-row">
          {props.companyData.map((e) => (
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
  );
}

export default SearchResultSection;

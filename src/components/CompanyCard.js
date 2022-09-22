
function CompanyCard(props) {
  return (
    <div className="card border-0 flex-row flex-fill justify-content-center align-items-center">
      <img src="/assets/img/sample-logo.png" className="img-fluid rounded-start" alt="..." />
      <div className="card-body">
        <h6 className="card-title fw-bold">{props.company.company}</h6>
        <a href={props.company.website} className="text-muted text-decoration-none">{props.company.website}</a>
      </div>
      <button type="button" className="btn btn-outline-danger ms-auto me-4">Track</button>
    </div>
  );
}

export default CompanyCard;

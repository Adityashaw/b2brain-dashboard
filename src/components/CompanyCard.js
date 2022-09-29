import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';


function CompanyCard(props) {
  const [tracking, setTracking] = useState(0)
  const [spinnerVisible, setspinnerVisibility] = useState(false)
  return (
    <div
      className="card border-0 flex-nowrap flex-row col-12 col-lg-6 justify-content-center align-items-center"
    >
      <img src="/assets/img/sample-logo.png" className="img-fluid rounded-start" alt="logo" />
      <div className="card-body">
        <h6 className="card-title fw-bold">{props.company.company}</h6>
        <a href={props.company.website} className="text-muted text-decoration-none text-break">{props.company.website}</a>
      </div>
      <button type="button"
        className={tracking ?
            "btn btn-outline-success ms-auto me-4"
            :
            "btn btn-outline-danger ms-auto me-4"
        }
        onClick={() => {
          if(!tracking) {
            setspinnerVisibility(true);
            console.log(`${props.company.company} (${props.company.slug}) tracked at ${new Date()}`);
          }
          setTimeout(() => {
            setTracking(!tracking)
            setspinnerVisibility(false)
          },
            1000
          )
        }}
      >
        {spinnerVisible &&
        <FaSpinner className="rotate"/>
        }
        {tracking ? "Tracking" : "Track"}</button>
    </div>
  );
}

export default CompanyCard;

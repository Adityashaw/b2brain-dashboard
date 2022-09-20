import { BsChevronDown } from 'react-icons/bs';
import { BsGear, BsLink45Deg } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { FaRegStar, FaRegUser } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineGroups } from 'react-icons/md';


function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-4 col-md-3 col-lg-2 d-block bg-light sidebar ">
      <div className="d-flex align-items-center gap-3 p-3">
        <img src="/assets/img/B2Brain.png" alt="logo" />
        <h2> B2Brain </h2>
      </div>
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active w-100 d-flex gap-2 align-items-center" aria-current="page" href="#">
              <IoHomeOutline /> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link w-100 d-flex gap-2 align-items-center" href="#">
              <FaRegStar /> Intels
              <UnreadPill unreadCount="4" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link w-100 d-flex gap-2 align-items-center" href="#">
              <FaRegUser /> Leads
              <UnreadPill unreadCount="4" />
            </a>
          </li>
          <li className="nav-item mb-1">
            <button className="nav-link btn btn-toggle shadow-none w-100 d-flex gap-2 align-items-center" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
              <FaRegBuilding />
              Accounts
              <BsChevronDown className="down-arrow ms-auto"/>
            </button>
            <div className="collapse show ps-2" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small border-start border-2 ms-3">
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Manage all</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Track new accounts</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Bulk Import</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item mb-1">
            <button className="nav-link btn btn-toggle shadow-none w-100 d-flex gap-2 align-items-center" data-bs-toggle="collapse" data-bs-target="#preference-collapse" aria-expanded="true">
              <BsGear /> Preferences
              <BsChevronDown className="ms-auto down-arrow"/>
            </button>
            <div className="collapse show ps-2" id="preference-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small border-start border-2 ms-3">
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Product Focus</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Intel Preferences</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-dark rounded">Lead Persona</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link gap-2 d-flex align-items-center" href="#">
              <BsLink45Deg /> Integrations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link gap-2 d-flex align-items-center" href="#">
              <MdOutlineGroups /> Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link gap-2 d-flex align-items-center" href="#">
              <HiOutlineChatAlt2 /> Help/Support
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

function UnreadPill(props) {
  return (
    <span className="ms-auto badge rounded-pill bg-danger">
      {props.unreadCount} Unread
    </span>
  );
}
export default Sidebar;

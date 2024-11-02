import CardWidget from "./CardWidget"

const NavBarComponent = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar py-3 px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/tramontana-logo.svg"
              alt="Logo"
              width="30"
              height="30"
              className="logo d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto custom-nav-links">
              <li className="nav-item">
                <a className="nav-link custom-link"  href="#">
                  New In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#">
                  Shop by products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#">
                  Best Sellers
                </a>
              </li>
            </ul>

          <div className="d-flex" ><CardWidget counter={15} />
          </div>
          </div>
        </div>
      </nav>
    )
  }

export default NavBarComponent

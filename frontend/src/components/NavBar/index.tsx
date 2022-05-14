import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/logo.svg";

import westIcon from '../../assets/favicon.png'
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="wstmovie-nav-content">
          {/* <h1>WSTMovie</h1> */}
          <img src={westIcon} alt="Logo" />
          <a href="https://github.com/gabwestside">
            <div className="wstmovie-contact-container">
              <GithubIcon />
              <p className="wstmovie-contact-link">/gabwestside</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

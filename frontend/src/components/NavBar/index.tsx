import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/logo.svg";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="wstmovie-nav-content">
          <h1>WSTMovie</h1>
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

import React from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";

//Use LInk instead of <a>
const Welcome = props => {
  return (
    <div class="Welcome">
      <div className="header">
        {" "}
        <LockOpenIcon /> Data By Bay{" "}
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <Link classname="links" to="/home">
                Home
              </Link>
              {/* <a href="/home"> Home </a>{" "} */}
            </li>
            <li>
              <Link classname="links" to="/survey-form">
                {" "}
                Course Registration
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Welcome;

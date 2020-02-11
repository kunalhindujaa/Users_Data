import React from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";

function Welcome(props) {
  return (
    <div class="Welcome">
      <div className="welcome-msg">
        {" "}
        <LockOpenIcon /> Data By Bay{" "}
      </div>
      <header>
        <nav>
          <ul className="links">
            <li>
              <a href="/home"> Home </a>{" "}
            </li>
            <li>
              <a href="/survey-form"> Course Registration </a>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Welcome;

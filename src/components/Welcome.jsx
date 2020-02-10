import React from 'react';
import Home from "./Home";


function Welcome(props){
    return(
        <div class="Welcome">
            <div className="welcome-msg"> Welcome Kunal </div>
            <header>
                <nav>
                    <ul className="links">
                        <li> <a href="/home"> Home </a> </li>
                        <li> <a href="/survey-form"> Survey Form </a> </li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );

}

export default Welcome;
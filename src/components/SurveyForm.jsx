import React, { useState } from "react";

function SurveyForm(props){
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[listItem, setListItem] = useState("React");
    // const[check1, setCheck1] = useState(false);
    // const[check2, setCheck2] = useState(false);
    // const[check3, setCheck3] = useState(false);
    const [gender, setRadio] = useState("");

    function handleName(event){
        setName(event.target.value);
    }

    function handlePhone(event){
        setPhone(event.target.value);
    }

   
    function handleListChange(event){
        setListItem(event.target.value);
    }

    function handleRadioChange(event){
        setRadio(event.target.value);
    }

    function handleSubmit(event){
        props.history.push({
            pathname : "/display-details",
            props : {...props}
        });
        event.preventDefault();
    }

    function handleReset(event){
        setName("");
        setPhone("");
        setRadio("");
        setListItem("React");

    }

    return(
        <div>
            <h1> User Survey Form </h1>
            <form>
                <label>Name </label> 
                <input type="text" placeholder="Enter your name" value={name} onChange={handleName}/>
                <br />
                <br />

                <label>Contact Number </label> 
                <input type="tel" placeholder="Enter your number" value={phone} onChange={handlePhone}/>
                <br />
                <br />

                <label> Gender </label>
                <input type="radio" name="gender" value="Male" onChange={handleRadioChange}/> Male
                <input type="radio" name="gender" value="Female" onChange={handleRadioChange}/> Female
                <br />
                <br/>

                <label>Course </label>
                <select value={listItem} onChange={handleListChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>

                <br />
                <br />

                {/* <label> Your view on our previous course </label>
                <input type="checkbox" name="check1" checked={check1} /> Good 
                <input type="checkbox" name="check2" checked={check2} /> Average 
                <input type="checkbox" name="check3" checked={check3} /> Excellent 
                <br />
                <br/> */}

                <button onClick={handleSubmit}>Submit</button> 
                <button onClick={handleReset}>Reset</button>
              
            </form>
        </div>
    );
}

export default SurveyForm;
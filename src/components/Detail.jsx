import React from "react";

const Detail = props => {
  return (
    <div className="detail">
      <p> Name : {props.userName}</p>
      <p> Email : {props.emailId}</p>
      <p> Website : {props.website}</p>
    </div>
  );
};

export default Detail;

import React from "react";
import "./selectedMember.css";

const SelectedMembers = () => {
  return (
    <div className="selected-container">
      <figure className="user-selected">
        <div>
          <img src="/images/1.jpeg" alt="" />
          <span>
            <i className="fa fa-check-circle"></i>
          </span>
        </div>
        <figcaption>Etrin Green</figcaption>
      </figure>
      <figure className="user-selected">
        <div>
          <img src="/images/1.jpeg" alt="" />
          <span>
            <i className="fa fa-check-circle"></i>
          </span>
        </div>
        <figcaption>Etrin Green</figcaption>
      </figure>
      <div className="selected-counter">+5</div>
    </div>
  );
};

export default SelectedMembers;

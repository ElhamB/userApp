import React from "react";
import addUser from "./add-user.svg";

const UserItem = ({ user }) => {
  return (
    <div className="user-container">
      <div>
        <figure className="user-info">
          <div className="img-container">
            <img src={user.image} alt="" />
            <div
              className={`status ${user.status ? "online" : "offline"} `}
            ></div>
          </div>
          <figcaption>
            <span>{user.name}</span>
            <span>{user.title}</span>
          </figcaption>
        </figure>
      </div>
      <div>
        <button className="btn-add">
          <img src={addUser} className="add-user-icon" alt="add-user-icon" />
          Add
        </button>
        {/* <button className="btn-added">
          <i className="fa fa-check-circle"></i> Added
        </button> */}
      </div>
    </div>
  );
};

export default UserItem;

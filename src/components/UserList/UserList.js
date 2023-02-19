import React from "react";
import "./userList.css";
import addUser from './add-user.svg';

const UserList = () => {
  return (
    <div className="user-list">
      <div className="user-container">
        <div>
          <figure className="user-info">
            <div className="img-container">
              <img src="/images/1.jpeg" alt="" />
              <div className="online-sign"></div>
            </div>
            <figcaption>
              <span>Erin Green</span>
              <span>Marketing manager</span>
            </figcaption>
          </figure>
        </div>
        <div>
          <button className="btn-add"> <img src={addUser} className="add-user-icon" alt="add-user-icon" />
Add</button>
        </div>
      </div>
      <div className="user-container">
        <div>
          <figure className="user-info">
            <div className="img-container">
              <img src="/images/2.jpg" alt="" />
              <div className="online-sign"></div>
            </div>
            <figcaption>
              <span>Erin Green</span>
              <span>Marketing manager</span>
            </figcaption>
          </figure>
        </div>
        <div>
          <button className="btn-added"><i className="fa fa-check-circle"></i> Added</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;

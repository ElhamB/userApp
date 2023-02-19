import React from "react";
import SelectedMember from "../components/SelectedMembers/SelectedMembers";
import UserFilter from "../components/UserFilter/UserFilter";
import UserList from "../components/UserList/UserList";

import "./createGroup.css";
const CreateGroupPage = () => {
  return (
    <div className="container">
      <div className="form-control">
        <label htmlFor="group-title">Group Title</label>
        <input id="group-title" />
      </div>
      <SelectedMember />
      <UserFilter />
      <UserList/>
      <div className="button-container">
        <button className="btn-outline-primary">Discard</button>
        <button className="btn-primary">Create</button>
      </div>
    </div>
  );
};

export default CreateGroupPage;

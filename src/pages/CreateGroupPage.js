import React from "react";
import { useSelector } from "react-redux";
import SelectedMember from "../components/SelectedMembers/SelectedMembers";
import UserFilter from "../components/UserFilter/UserFilter";
import UserList from "../components/UserList/UserList";
import "./createGroup.css";

const CreateGroupPage = () => {
const selectedUsers = useSelector((state) => state.user.selectedUsers);
  //disable create button if selected user is empty
 const disabledCreate=selectedUsers.length === 0;

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
        <button className="btn-primary" disabled={disabledCreate}>Create</button>
      </div>
    </div>
  );
};

export default CreateGroupPage;

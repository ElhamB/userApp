import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectedMember from "../components/SelectedMembers/SelectedMembers";
import UserFilter from "../components/UserFilter/UserFilter";
import UserList from "../components/UserList/UserList";
import useUnsavedChangesWarning from "../hooks/useUnsavedChangesWarning";
import "./createGroup.css";

const CreateGroupPage = () => {
  const [groupTitle, setGroupTitle] = useState("");
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();

  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  //disable create button if selected user is empty
  const disabledCreate = selectedUsers.length === 0;

  return (
    <div className="container">
      <div className="form-control">
        <label htmlFor="group-title">Group Title</label>
        <input
          id="group-title"
          value={groupTitle}
          onChange={(e) => {
            setGroupTitle(e.target.value);
            setDirty();
          }}
        />
      </div>
      <SelectedMember />
      <UserFilter />
      <UserList />
      <div className="button-container">
        <button
          className="btn-outline-primary"
          onClick={() => Prompt()}>Discard</button>
        <button
          className="btn-primary"
          disabled={disabledCreate}
          onClick={() => setPristine()}>Create</button>
      </div>
    </div>
  );
};

export default CreateGroupPage;

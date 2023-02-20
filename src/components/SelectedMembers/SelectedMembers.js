import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./selectedMember.css";
import SelectedMemberItem from "./SelectedMemberItem";

const SelectedMembers = () => {
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const count = selectedUsers.length - 6;
  return (
    <Fragment>
      {selectedUsers.length === 0 && (
        <div className="no-item">Selected members will display here</div>
      )}
      <div className="selected-container">
        {selectedUsers.slice(0,6).map((user) => (
          <SelectedMemberItem user={user} key={user.id} />
        ))}
        {selectedUsers.length > 6 && (
          <div className="selected-counter">+{count}</div>
        )}
      </div>
    </Fragment>
  );
};

export default SelectedMembers;

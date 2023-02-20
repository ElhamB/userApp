import React from "react";
import { useSelector } from "react-redux";
import "./selectedMember.css";
import SelectedMemberItem from "./SelectedMemberItem";

const SelectedMembers = () => {
  const selectedUsers = useSelector((state) => state.user.selectedUsers);

  return (
    <div className="selected-container">
      {
        selectedUsers.map((user)=><SelectedMemberItem user={user} key={user.id}/>)
      }
      <div className="selected-counter">+5</div>
    </div>
  );
};

export default SelectedMembers;

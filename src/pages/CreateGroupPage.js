import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectedMember from "../components/SelectedMembers/SelectedMembers";
import UserFilter from "../components/UserFilter/UserFilter";
import UserList from "../components/UserList/UserList";
import useUnsavedChangesWarning from "../hooks/useUnsavedChangesWarning";
import "./createGroup.css";

const CreateGroupPage = () => {
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
//validation
  const [groupTitle, setGroupTitle] = useState("");
  const [groupTitleIsTouched,setGroupTitleIsTouched]=useState(false);
  const groupTitleIsValid=groupTitle.trim() !== "";
  const groupTitleIsInValid= !groupTitleIsValid && groupTitleIsTouched;
  const groupTitleInputClass=groupTitleIsInValid ? "form-control invalid":"form-control";

const handleGroupTitleBlur=()=>{
  setGroupTitleIsTouched(true);
}
const handleGroupTitleChange=(e)=>{
  setGroupTitle(e.target.value);
  setDirty();
}
const handleSubmit= event =>{
  event.preventDefault();
  setGroupTitleIsTouched(true);
  if(!groupTitleIsValid){
    return
  }
  setGroupTitle('');
  setGroupTitleIsTouched(false);
}
  //disable create button if selected user is empty
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const disabledCreate = selectedUsers.length === 0  ;
console.log("disabledCreate" + disabledCreate);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className={groupTitleInputClass}>
        <label htmlFor="group-title">Group Title</label>
        <input
          id="group-title"
          value={groupTitle}
          onBlur={handleGroupTitleBlur}
          onChange={handleGroupTitleChange}
        />
        {groupTitleIsInValid && <p className="text-danger">Enter a group title</p>}
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
      </form>
    </div>
  );
};

export default CreateGroupPage;

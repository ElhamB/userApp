import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectedMember from "../../components/SelectedMembers";
import UserFilter from "../../components/UserFilter";
import UserList from "../../components/UserList";
import useUnsavedChangesWarning from "../../hooks/useUnsavedChangesWarning";
import useCreateCsv from "../../hooks/useCreateCsv";
import "./createGroup.css";

const CreateGroupPage = () => {
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
  const [groupTitle, setGroupTitle] = useState("");

  //disable create button if selected user is empty
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const disabledCreate = selectedUsers.length === 0;
  // console.log("disabledCreate" + disabledCreate);
  //

  const { downloadCsvFile } = useCreateCsv();

  // const data = useMemo(()=>{
  // var cvRows = [];
  //   if(selectedUsers.length > 0 && groupTitle){
  //       for(var i=0;i<selectedUsers.length;i++){
  //         cvRows.push(selectedUsers[i].name,groupTitle,'Elham bagheri',new Date().toLocaleString())
  //       }
  //         console.log(cvRows)
  //     }
  // },[groupTitle,selectedUsers])
  var result = [];

  function getData() {
    var cvRows = [];
    if (selectedUsers.length > 0 && groupTitle) {
      for (var i = 0; i < selectedUsers.length; i++) {
        cvRows.push(
          selectedUsers[i].name,
          groupTitle,
          "Elham bagheri",
          new Date().toLocaleString()
        );
      }
      const chunkSize = 4;

      for (let i = 0; i < cvRows.length; i += chunkSize) {
        const chunk = cvRows.slice(i, i + chunkSize);
        result.push(chunk);
      }
    }
  }
  getData();
  console.log(result);
  //   useEffect(()=>{

  // },[selectedUsers,groupTitle])

  //validation
  const [groupTitleIsTouched, setGroupTitleIsTouched] = useState(false);
  const groupTitleIsValid = groupTitle.trim() !== "";
  const groupTitleIsInValid = !groupTitleIsValid && groupTitleIsTouched;
  const groupTitleInputClass = groupTitleIsInValid
    ? "form-control invalid"
    : "form-control";

  const handleGroupTitleBlur = () => {
    setGroupTitleIsTouched(true);
  };
  const handleGroupTitleChange = (e) => {
    setGroupTitle(e.target.value);
    setDirty();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setGroupTitleIsTouched(true);
    if (!groupTitleIsValid) {
      return;
    }
    setGroupTitle("");
    setGroupTitleIsTouched(false);
  };

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
          {groupTitleIsInValid && (
            <p className="text-danger">Enter a group title</p>
          )}
        </div>
        <SelectedMember />
        <UserFilter />
        <UserList />
        <div className="button-container">
          <button className="btn-outline-primary" onClick={() => Prompt()}>
            Discard
          </button>
          <button
            className="btn-primary"
            disabled={disabledCreate}
            onClick={() => {
              setPristine();
              downloadCsvFile(result);
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupPage;

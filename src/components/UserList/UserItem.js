import React from "react";
import { useDispatch,useSelector } from "react-redux";
import addUser from "./add-user.svg";
import { addUsers } from "../../store/user";
const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.user.isAdded);
const userInfo={
     id:user.id,
    name:user.name,
    image:user.image,
    isSelected:true
}
  const hanleSelectUser = () => {
    dispatch(addUsers(userInfo));
  };
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
        <button className={`${isAdded ? 'btn-added': 'btn-add'}`} onClick={hanleSelectUser}>
        {isAdded ? <i className="fa fa-check-circle"></i> : <img src={addUser} className="add-user-icon" alt="add-user-icon" />} 
          {isAdded ? 'Added': 'Add'}
        </button>
      </div>
    </div>
  );
};

export default UserItem;

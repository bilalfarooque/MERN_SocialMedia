import React from "react";
import "./CloseFriend.css"
import defaultPic from "../../assets/People/profilePicDefault.jpg";

export default function CloseFriend({user}) {

  return (
    <>
      <li className="sidebarFriend">
        <img src={user.profilePicture ? user.profilePicture : defaultPic} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
}

import React from 'react'
import "./Online.css"
import defaultPic from "../../assets/People/profilePicDefault.jpg";

export default function Online({user}) {
  return (
    <>
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture ? user.profilePicture : defaultPic} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
          </li>

    </>
  )
}

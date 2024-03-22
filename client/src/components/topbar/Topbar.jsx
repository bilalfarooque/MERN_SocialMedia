import React from "react";
import "./Topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import profilePic from "../../assets/Images/profile-pic.png";

export default function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">SocialBook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={profilePic} alt="" className="topbarImg" />
        </div>
      </div>
    </>
  );
}

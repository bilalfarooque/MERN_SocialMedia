import React from "react";
import "./Rightbar.css";
import CakeIcon from "@mui/icons-material/Cake";
import ad from "../../assets/Images/advertisement.png";

import {Users} from "../../dummyData.jsx"
import Online from "../OnlineFriend/Online.jsx";

export default function Rightbar({user}) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>John Carter</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbar-follow-button" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Empty"}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          {friends.map((friend) => {
            return (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
                key={friend._id}
              >
                <div className="rightbar-following">
                  <img
                    src={
                      friend.profilePicture
                        ? PF + friend.profilePicture
                        : `${PF}person/noAvatar.png`
                    }
                    alt=""
                    className="rightbar-following-img"
                  />
                  <div className="rightbar-following-name">
                    {friend.username}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  };


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {user ? <ProfileRightBar/> : <HomeRightBar/> }
      </div>
    </div>
  );
}

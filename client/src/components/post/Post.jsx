import React from "react";
import "./Post.css";
import profilePic from "../../assets/People/profile-pic.png";
import postImage from "../../assets/Images/feed-image-1.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import like from  '../../assets/Icons/like-blue.png'
import heart from  '../../assets/Icons/heart.png'


export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profilePic} alt="" className="postProfileImg" />
            <span className="postUserName">Username</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">

            <MoreVertIcon />
          </div>
        </div>
        
        <div className="postCenter">
            <p className="postText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere tristique arcu, a cursus ante sem </p>
            <img src={postImage} alt="" className="postImg" />
        </div>
        
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={like} className="postIcon" alt="" />
                <img src={heart} className="postIcon" alt="" />
                <span className="postLikes">32 people likes this</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments
                </span>
            </div>
        </div>
      </div>
    </div>
  );
}

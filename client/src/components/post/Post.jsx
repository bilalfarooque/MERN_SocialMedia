import React, { useState } from "react";
import "./Post.css";
import defaultPic from "../../assets/People/profilePicDefault.jpg";
import postImage from "../../assets/Images/feed-image-1.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Users } from "../../dummyData.jsx";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const user = Users.filter((e) => e.id == post.id);

  console.log(user[0]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user[0].profilePicture ? user[0].profilePicture : defaultPic}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          <p className="postText">{post?.desc}</p>
          <img src={postImage} alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon
              style={{ fill: isLiked ? "#1877f2" : "grey" }}
              onClick={likeHandler}
            />
            {/* <FavoriteIcon
              style={{ fill: isLiked ? "red" : "grey" }}
              onClick={likeHandler}
            /> */}

            <span className="postLikes">{like} people likes this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import express  from "express";
import { commentPostController, createPostController, deletePostController, getAllPostsController, getPostController, getUserPostController, likePostController, updatePostController } from "../controllers/postsController.js";

//user API
const postRouter = express.Router()

//create a post
postRouter.post("/", createPostController)
//update a post
postRouter.put("/:id", updatePostController)
//delete a post
postRouter.delete("/:id", deletePostController)
//like a post
postRouter.put("/:id/like", likePostController)
//comment a post
postRouter.put("/:id/comment", commentPostController)
//get a post
postRouter.get("/", getAllPostsController)
//get all timeline posts
postRouter.get("/timeline/:userId", getPostController)
//get all user posts
postRouter.get("/profile/:username", getUserPostController)


export default postRouter
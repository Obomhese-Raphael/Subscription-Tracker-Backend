import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// Get all users
userRouter.get("/", getUsers);

// Get a single user by ID
userRouter.get("/:id", authorize, getUser);

// Create a new user
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE a new user" });
});

// Update a user by ID
userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE user " });
});

// Delete a user by ID
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE user" });
});

export default userRouter;

import express from "express";

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
    return res.status(404).send("not found");
});

export default userRouter;

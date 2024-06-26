import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware..js";
import  contactController  from "../controller/contact-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// USER API routes
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// CONTACT API ROUTES
userRouter.post("/api/users/contact", contactController.create)
userRouter.get("/api/users/contact/:contactId", contactController.get)
userRouter.put("/api/users/contact/:contactId", contactController.update)
userRouter.delete("/api/users/contact/:contactId", contactController.remove)
userRouter.get("/api/users/contact", contactController.search)
export { userRouter };

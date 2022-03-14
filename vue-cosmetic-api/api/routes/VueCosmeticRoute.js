import express from "express";
import realEstateController from "../controllers/vueCosmeticController";
import checkIfAuthenticated from "../middlewares/checkIfAuthenticated";

const vueCosmeticRoute = express.Router();

// vueCosmeticRoute.use(checkIfAuthenticated);

vueCosmeticRoute.get("/list", vueCosmeticController.list);

vueCosmeticRoute.get("/:id", vueCosmeticController.get);

vueCosmeticRoute.post("/create",vueCosmeticController.post);

vueCosmeticRoute.put("/update", vueCosmeticController.put);

vueCosmeticRoute.put("/:id/uploadFile", vueCosmeticController.uploadFile);

vueCosmeticRoute.put(
  "/:vueCosmeticId/removeFile/:filename",
 vueCosmeticController.deleteFile
);

vueCosmeticRoute.delete("/:id", vueCosmeticController.delete);

export default vueCosmeticRoute;

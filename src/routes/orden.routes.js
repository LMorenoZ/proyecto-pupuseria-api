import { Router } from "express";
import { methods as ordenController } from "./../controllers/orden.controller";

const router = Router();

router.get("/", ordenController.getLanguages);
// router.get("/:id", languageController.getLanguage);
router.post("/", ordenController.addLanguage);
router.put("/:id", ordenController.updateLanguage);
// router.delete("/:id", ordenController.deleteLanguage);

export default router;

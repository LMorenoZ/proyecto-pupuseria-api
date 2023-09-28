import { Router } from "express";
import { methods as ordenController } from "./../controllers/orden.controller";

const router = Router();

router.get("/", ordenController.traerOrdenes);
router.post("/", ordenController.crearOrden);
router.put("/:id", ordenController.actualizarOrden);

export default router;

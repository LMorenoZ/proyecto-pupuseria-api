import { Router } from "express";
import { methods as mesaController } from "../controllers/mesa.controller";

const router = Router();

router.get("/", mesaController.traerMesas);
router.post("/", mesaController.crearMesa);
router.put("/:id", mesaController.actualizarMesa);
router.delete("/:id", mesaController.borrarMesa);

export default router;

import { Router } from "express";
import * as SpecialistController from "../../controllers/specialist";

export const specialistRouter = Router();

specialistRouter.post("/specialists", async (req, res) => {
  const specialist = req.body;
  try {
    const newSpecialist = await SpecialistController.createSpecialist(
      specialist
    );
    return res.send(201).json(newSpecialist);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

specialistRouter.get("/specialists", async (req, res) => {
  try {
    const specialists = await SpecialistController.listSpecialist();
    return res.status(200).json(specialists);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

specialistRouter.get("/specialists/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const specialisById = await SpecialistController.listSpecialistById(
        Number(id)
      );
      return res.status(200).json(specialisById);
    }
    return res.status(404).json("Specialist could not be found.");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

specialistRouter.put("/specialists/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const specialist = req.body;
      const updateSpecialist = await SpecialistController.updateSpecialist(
        specialist,
        Number(id)
      );
      return res.status(201).json(updateSpecialist);
    }
    return res.status(500).json("Specialist could not be found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

specialistRouter.delete("/specialists/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await SpecialistController.deleteSpecialist(Number(id));
    res.status(204).json("Deleted Successfully!");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

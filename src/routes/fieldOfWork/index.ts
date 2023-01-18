import { Router } from "express";
import * as FieldOfWorkController from "../../models/fieldOfWork";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.get("/fieldofwork", async (req, res) => {
  try {
    const fieldOfWork = await FieldOfWorkController.listFieldOfWork();
    return res.status(500).json(fieldOfWork);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

fieldOfWorkRouter.get("/fieldofwork/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const fieldOfWorkById = await FieldOfWorkController.listFieldOfWorkById(
        Number(id)
      );
      return res.status(200).json(fieldOfWorkById);
    }
    return res.status(404).json("Field of Work could not be found");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

fieldOfWorkRouter.post("/fieldofwork", async (req, res) => {
  const fieldOfWork = req.body;
  try {
    if (fieldOfWork) {
      const newFieldOfWork = await FieldOfWorkController.createFieldOfWork(
        fieldOfWork
      );
      return res.send(201).json(newFieldOfWork);
    }
    return res.status(500).json("Something went wrong");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

fieldOfWorkRouter.put("/fieldofwork/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const fieldOfWork = req.body;
      await FieldOfWorkController.updateFieldOfWork(fieldOfWork, Number(id));
      res.status(201).json(fieldOfWork);
    }
    return res.status(500).json("Field of Work could not be found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

fieldOfWorkRouter.delete("/fieldofwork/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await FieldOfWorkController.deleteFieldOfWorking(Number(id));
      res.status(204).json("Deleted Succesfully!");
    }
    res.status(500).json("Field of Work not found");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

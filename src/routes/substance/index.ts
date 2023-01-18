import { Router } from "express";
import * as SubstanceController from "../../models/substance";

export const substanceRouter = Router();

substanceRouter.get("/substance", async (req, res) => {
  try {
    const substances = await SubstanceController.listSubstance();
    return res.status(200).json(substances);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

substanceRouter.get("/substance/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const substance = await SubstanceController.listSubstanceById(Number(id));
      return res.status(200).json(substance);
    }
    return res.status(500).json("Substance not found.");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

substanceRouter.post("/substance", async (req, res) => {
  const substance = req.body;

  try {
    if (substance) {
      const newSubstance = SubstanceController.createSubstance(substance);
      return res.send(201).json(newSubstance);
    }
    return res.status(500).json("Something went wrong.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

substanceRouter.put("/substance/:id", async (req, res) => {
  const { id } = req.params;
  const substance = req.body;

  try {
    if (id) {
      const updateSpecialis = await SubstanceController.updateSubstance(
        substance,
        Number(id)
      );
      return res.status(200).json(updateSpecialis);
    }
    return res.status(500).json("Substance not found.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

substanceRouter.delete("/substance/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      await SubstanceController.deleteSubstance(Number(id));
      return res.status(200).json("Substance deleted successfully.");
    }
    return res.status(500).json("Substance not found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

import { RequestHandler } from "express";
import * as SubstanceModel from "../../models/substance";

export const listAllSubstance: RequestHandler = async (req, res) => {
  try {
    const substances = await SubstanceModel.listSubstance();
    return res.status(200).json(substances);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdSubstance: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const substance = await SubstanceModel.listSubstanceById(Number(id));
      return res.status(200).json(substance);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createSubstance: RequestHandler = async (req, res) => {
  const substance = req.body;
  try {
    if (substance) {
      const newSubstance = SubstanceModel.createSubstance(substance);
      return res.status(201).json(newSubstance);
    } else {
      return res
        .status(400)
        .json({ error: "Missing substance object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSubstance: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const substance = req.body;
  try {
    if (id) {
      const updateSubstance = await SubstanceModel.updateSubstance(
        substance,
        Number(id)
      );
      return res.status(200).json(updateSubstance);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteSubstance: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await SubstanceModel.deleteSubstance(Number(id));
      return res.status(200).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

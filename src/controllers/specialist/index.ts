import { RequestHandler } from "express";
import * as SpecialistModel from "../../models/specialist";

export const listAllSpecialist: RequestHandler = async (req, res) => {
  try {
    const specialists = await SpecialistModel.listSpecialist();
    return res.status(200).json(specialists);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdSpecialist: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const specialist = await SpecialistModel.listSpecialistById(Number(id));
      return res.status(200).json(specialist);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createSpecialist: RequestHandler = async (req, res) => {
  const specialist = req.body;
  try {
    if (specialist) {
      const newSpecialist = SpecialistModel.createSpecialist(specialist);
      return res.status(201).json(newSpecialist);
    } else {
      return res
        .status(400)
        .json({ error: "Missing specialist object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateSpecialist: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const specialist = req.body;
  try {
    if (id) {
      const updateSpecialist = await SpecialistModel.updateSpecialist(
        specialist,
        Number(id)
      );
      return res.status(200).json(updateSpecialist);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteSpecialist: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await SpecialistModel.deleteSpecialist(Number(id));
      return res.status(200).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

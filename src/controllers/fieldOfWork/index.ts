import { RequestHandler } from "express";
import * as FieldOfWorkModel from "../../models/fieldOfWork";

export const listAllFields: RequestHandler = async (req, res) => {
  try {
    const fieldOfWork = await FieldOfWorkModel.listFieldOfWork();
    res.status(200).json(fieldOfWork);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdFields: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const fieldOfWork = await FieldOfWorkModel.listFieldOfWorkById(
        Number(id)
      );
      return res.status(200).json(fieldOfWork);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createFields: RequestHandler = async (req, res) => {
  const fieldOfWork = req.body;
  try {
    if (fieldOfWork) {
      const newFieldOfWork = await FieldOfWorkModel.createFieldOfWork(
        fieldOfWork
      );
      return res.send(201).json(newFieldOfWork);
    } else {
      return res
        .status(400)
        .json({ error: "Missing fieldOfWork object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateFields: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const fieldOfWork = req.body;

  try {
    if (id) {
      const updateFieldOfWork = await FieldOfWorkModel.updateFieldOfWork(
        fieldOfWork,
        Number(id)
      );
      return res.status(200).json(updateFieldOfWork);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteFields: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await FieldOfWorkModel.deleteFieldOfWorking(Number(id));
      return res.status(204).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

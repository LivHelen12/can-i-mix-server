import { RequestHandler } from "express";
import * as EducationModel from "../../models/education";

export const listAllEducation: RequestHandler = async (req, res) => {
  try {
    const educations = await EducationModel.listEducation();
    return res.status(200).json(educations);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdEducation: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const education = await EducationModel.listEducationById(Number(id));
      return res.status(200).json(education);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createEducation: RequestHandler = async (req, res) => {
  const education = req.body;
  try {
    if (education) {
      const newEducation = EducationModel.createEducation(education);
      return res.status(201).json(newEducation);
    } else {
      return res
        .status(400)
        .json({ error: "Missing education object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateEducation: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const education = req.body;
  try {
    if (id) {
      const updateEducation = await EducationModel.updateEducation(
        education,
        Number(id)
      );
      return res.status(200).json(updateEducation);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteEducation: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await EducationModel.deleteEducation(Number(id));
      return res.status(200).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

import { Router } from "express";
import * as EducationController from "../../controllers/education";

export const educationRouter = Router();

educationRouter.get("/education", async (req, res) => {
  try {
    const educations = await EducationController.listEducation();
    return res.status(200).json(educations);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

educationRouter.get("/education/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const education = await EducationController.listEducationById(Number(id));
      return res.status(200).json(education);
    }
    return res.status(500).json("Education not found.");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

educationRouter.post("/education", async (req, res) => {
  const education = req.body;

  try {
    if (education) {
      const newEducation = EducationController.createEducation(education);
      return res.send(201).json(newEducation);
    }
    return res.status(500).json("Something went wrong.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

educationRouter.put("/education/:id", async (req, res) => {
  const { id } = req.params;
  const education = req.body;

  try {
    if (id) {
      const updateSpecialis = await EducationController.updateEducation(
        education,
        Number(id)
      );
      return res.status(200).json(updateSpecialis);
    }
    return res.status(500).json("Education not found.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

educationRouter.delete("/education/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      await EducationController.deleteEducation(Number(id));
      return res.status(200).json("Education deleted successfully.");
    }
    return res.status(500).json("Education not found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

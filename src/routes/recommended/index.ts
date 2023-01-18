import { Router } from "express";
import * as RecommendedController from "../../models/recommended";

export const recommendedRouter = Router();

recommendedRouter.get("/recommended", async (req, res) => {
  try {
    const recommendeds = await RecommendedController.listRecommended();
    return res.status(200).json(recommendeds);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

recommendedRouter.get("/recommended/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const recommended = await RecommendedController.listRecommendedById(
        Number(id)
      );
      return res.status(200).json(recommended);
    }
    return res.status(500).json("Recommended not found.");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

recommendedRouter.post("/recommended", async (req, res) => {
  const recommended = req.body;

  try {
    if (recommended) {
      const newRecommended =
        RecommendedController.createRecommended(recommended);
      return res.send(201).json(newRecommended);
    }
    return res.status(500).json("Something went wrong.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

recommendedRouter.put("/recommended/:id", async (req, res) => {
  const { id } = req.params;
  const recommended = req.body;

  try {
    if (id) {
      const updateSpecialis = await RecommendedController.updateRecommended(
        recommended,
        Number(id)
      );
      return res.status(200).json(updateSpecialis);
    }
    return res.status(500).json("Recommended not found.");
  } catch (error: any) {
    return res.send(500).json(error.message);
  }
});

recommendedRouter.delete("/recommended/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      await RecommendedController.deleteRecommended(Number(id));
      return res.status(200).json("Recommended deleted successfully.");
    }
    return res.status(500).json("Recommended not found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

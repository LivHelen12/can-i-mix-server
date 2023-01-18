import { RequestHandler } from "express";
import * as RecommendedModel from "../../models/recommended";

export const listAllRecommended: RequestHandler = async (req, res) => {
  try {
    const recommendeds = await RecommendedModel.listRecommended();
    return res.status(200).json(recommendeds);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdRecommended: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const recommended = await RecommendedModel.listRecommendedById(
        Number(id)
      );
      return res.status(200).json(recommended);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createRecommended: RequestHandler = async (req, res) => {
  const recommended = req.body;
  try {
    if (recommended) {
      const newRecommended = RecommendedModel.createRecommended(recommended);
      return res.status(201).json(newRecommended);
    } else {
      return res
        .status(400)
        .json({ error: "Missing recommended object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateRecommended: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const recommended = req.body;
  try {
    if (id) {
      const updateRecommended = await RecommendedModel.updateRecommended(
        recommended,
        Number(id)
      );
      return res.status(200).json(updateRecommended);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteRecommended: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await RecommendedModel.deleteRecommended(Number(id));
      return res.status(200).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

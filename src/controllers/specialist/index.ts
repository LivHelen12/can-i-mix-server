import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "../../services/specialist";

export const listAllSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const specialists = await SpecialistModel.listSpecialist();
    res.json(specialists);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};

export const listByIdSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const specialist = await SpecialistModel.listSpecialistById(Number(id));
    res.json(specialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};

export const createSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const specialist = req.body;
    const newSpecialist = SpecialistModel.createSpecialist(specialist);
    res.json(newSpecialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};

export const updateSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const specialist = req.body;
    const updateSpecialist = await SpecialistModel.updateSpecialist(
      specialist,
      Number(id)
    );
    res.json(updateSpecialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};

export const deleteSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    await SpecialistModel.deleteSpecialist(Number(id));
    res.send();
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};

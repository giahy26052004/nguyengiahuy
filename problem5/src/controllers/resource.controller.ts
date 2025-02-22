import { Request, Response } from "express";
import Resource from "../models/Resource";

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = new Resource({ name, description });
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error creating resource", error });
  }
};

export const getResources = async (req: Request, res: Response) => {
  try {
    const resources = await Resource.find(req.query);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources", error });
  }
};

export const getResource = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resource", error });
  }
};

export const updateResource = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error updating resource", error });
  }
};

export const deleteResource = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resource", error });
  }
};

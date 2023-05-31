import { Request, Response } from 'express';
import AnimalService from '../services/animal.service';

const animalService = new AnimalService();

export const getAllAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await animalService.getAllAnimals();
    res.json(animals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAnimalById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const animal = await animalService.getAnimalById(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createAnimal = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const { name, birthDate, breed, gender, type } = req.body;
    const animal = await animalService.createAnimal(name, birthDate, breed, gender, type);
    res.status(201).json(animal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, birthDate, breed, gender, type } = req.body;
    const animal = await animalService.updateAnimal(id, name, birthDate, breed, gender, type);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const animal = await animalService.deleteAnimal(id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json({ message: 'Animal deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

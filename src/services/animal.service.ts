import AnimalModel, { IAnimal } from '../models/animal.model';


export default class AnimalService {
  public async getAllAnimals(): Promise<IAnimal[]> {
    try {
      const animals = await AnimalModel.find();
      return animals;
    } catch (error) {
      throw new Error('Error al obtener todos los animales');
    }
  }

  public async getAnimalById(id: string): Promise<IAnimal | null> {
    try {
      const animal = await AnimalModel.findById(id);
      return animal;
    } catch (error) {
      throw new Error('Error al obtener el animal');
    }
  }

  public async createAnimal(name: string, birthDate: string, breed: string, gender: string, type?: string): Promise<IAnimal> {
    try {
      const animal = new AnimalModel({ name, birthDate, breed, gender, type });
      const createdAnimal = await animal.save();
      return createdAnimal;
    } catch (error) {
      throw new Error('Error al crear el animal');
    }
  }

  public async updateAnimal(id: string, name: string, birthDate: string, breed: string, gender: string, type: string): Promise<IAnimal | null> {
    try {
      const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, { name, birthDate, breed, gender, type }, { new: true });
      return updatedAnimal;
    } catch (error) {
      throw new Error('Error al actualizar el animal');
    }
  }

  public async deleteAnimal(id: string): Promise<IAnimal | null> {
    try {
      const deletedAnimal = await AnimalModel.findByIdAndDelete(id);
      return deletedAnimal;
    } catch (error) {
      throw new Error('Error al eliminar el animal');
    }
  }
}

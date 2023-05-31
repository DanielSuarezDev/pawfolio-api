import mongoose, { Document } from 'mongoose';

// Define el esquema del animal
const animalSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  breed: String,
  gender: String,
  type: String,
});

// Define la interfaz del documento Animal
export interface IAnimal extends Document {
  name: string;
  birthDate: Date;
  breed: string;
  gender: string;
  type?: string;
}

// Crea el modelo de Animal basado en el esquema y la interfaz
const AnimalModel = mongoose.model<IAnimal>('Animal', animalSchema);

export default AnimalModel;

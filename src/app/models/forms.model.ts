import { Animal } from "./animal.model";

export interface Form {
  id: number;
  animal: Animal;
  name: string;
  phone: string;
  document: string;
  profession: string;
  address: string;
  residenceType: string;
  hasYard: boolean;
  hasOtherAnimals: boolean;
  currentlyHasOtherAnimals: boolean;
  hasExperience: boolean;
  reasonToAdopt: string;
  status: string;
  createdAt: Date;
}

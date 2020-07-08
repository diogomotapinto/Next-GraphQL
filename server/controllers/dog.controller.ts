import Dog, { IDog } from "../models/dog.model";

export interface ICreateDog {
  name: IDog["name"];
  owner: IDog["owner"];
}

export async function CreateDog({ name, owner }: ICreateDog): Promise<IDog> {
  return Dog.create({ name, owner })
    .then((data: IDog) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function GetDogs(): Promise<IDog[]> {
  return Dog.find()
    .then((data: IDog[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

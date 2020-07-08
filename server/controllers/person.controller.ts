import Person, { IPerson } from "../models/person.model";

export interface ICreateUserInput {
  email: IPerson["email"];
  firstName: IPerson["firstName"];
  lastName: IPerson["lastName"];
}

export interface IGetPersonByEmail {
  email: IPerson["email"];
}

export async function CreatePerson({
  email,
  firstName,
  lastName,
}: ICreateUserInput): Promise<IPerson> {
  return Person.create({
    email,
    firstName,
    lastName,
  })
    .then((data: IPerson) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function GetPersons(): Promise<IPerson[]> {
  return Person.find()
    .then((data: IPerson[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function GetPersonByEmail({
  email,
}: IGetPersonByEmail): Promise<IPerson | null> {
  return Person.findOne({ email })
    .then((data: IPerson | null) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

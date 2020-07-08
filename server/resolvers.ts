import {
  ICreateUserInput,
  IGetPersonByEmail,
} from "./controllers/person.controller";
import { ICreateDog } from "./controllers/dog.controller";
const {
  GetPersons,
  CreatePerson,
  GetPersonByEmail,
} = require("./controllers/person.controller");
const { CreateDog, GetDogs } = require("./controllers/dog.controller");

export const resolvers = {
  Query: {
    persons: async () => {
      return await GetPersons();
    },
    dogs: async () => {
      return await GetDogs();
    },
    getPersonByEmail: async (_: any, { email }: IGetPersonByEmail) => {
      const person = await GetPersonByEmail({ email });
      return person;
    },
  },
  Mutation: {
    createPerson: async (
      _: any,
      { email, firstName, lastName }: ICreateUserInput
    ) => {
      const persons = await CreatePerson({ email, firstName, lastName });
      return persons;
    },
    createDog: async (_: any, { name, owner }: ICreateDog) => {
      const dog = await CreateDog({ name, owner });
      return dog;
    },
  },
};

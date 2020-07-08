import {
  ICreateUserInput,
  IGetPersonByEmail,
} from "./controllers/person.controller";
const {
  GetPersons,
  CreatePerson,
  GetPersonByEmail,
} = require("./controllers/person.controller");

export const resolvers = {
  Query: {
    persons: async () => {
      return await GetPersons();
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
  },
};

import React, { useRef } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Theme from "components/Theme";

export const ADD_PERSON = gql`
  mutation CreatePerson(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    createPerson(email: $email, firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;

interface IPerson {
  email: string;
  firstName: string;
  lastName: string;
}

interface IData {
  createPerson: IPerson;
}

const PersonForm = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const [addPerson, { error }] = useMutation<IData>(ADD_PERSON);

  const onsubmit = (e: any) => {
    e.preventDefault();
    addPerson({
      variables: {
        email: email.current?.value,
        firstName: firstName.current?.value,
        lastName: lastName.current?.value,
      },
    }).catch((err) => console.log(err));
  };

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <form onSubmit={(e) => onsubmit(e)}>
        <input ref={firstName} placeholder="First Name"></input>
        <input ref={lastName} placeholder="Last Name"></input>
        <input ref={email} placeholder="email"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PersonForm;

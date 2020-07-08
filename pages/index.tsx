import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";

export const ALL_PERSONS_QUERY = gql`
  query {
    persons {
      id
      email
      firstName
    }
  }
`;

interface IPerson {
  email: string;
  firstName: string;
  lastName: string;
}

interface IData {
  persons: [IPerson];
}

export default function Home() {
  const { data, loading, error } = useQuery<IData>(ALL_PERSONS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      {data.persons.map((elem: IPerson) => {
        console.log(elem.email);
      })}
    </div>
  );
}

import gql from "graphql-tag";
import { GraphQLScalarType, Kind } from "graphql";
// import { MonthYear } from "./types";
// import { MonthYearScalar } from "./types";

export const typeDefs = gql`
  type Query {
    "Get projects array for homepage grid"
    projectsForHome: [Project!]!
  }

  "A project is a group of features that provide details on an App created for my aoftware developer portfolio"
  type Project {
    id: ID!
    "The project's title"
    title: String!
    "A link to a project's webpage or demo video"
    link: String
    "A screenshot of the App"
    thumbnail: String
    "What the App does"
    description: String
    "The programming, markup, query and shaping languages used in the project as well as frameworks and libraries"
    developmentTools: String
    "A short reflection in my develment journey for the project"
    reflection: Reflection
    "The month the project was developed"
    developmentMonth: String
    "The year the project was developed"
    developmentYear: Int
  }

  "Reflection"
  type Reflection {
    id: ID!
    "An example of a blocker I experienced during development"
    blocker: String!
    "An example of a blocker I experienced during development"
    process: String
    "What solved the problem and how I figured it out"
    solution: String!
  }
`;

import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import ProjectCard from "../containers/project-card";

const PROJECTS = gql(`
query GetProjects {
  projectsForHome {
    id
    title
    link
    thumbnail
    description
    developmentTools
    reflection {
      id
      blocker
      process
      solution
    }
    developmentMonth
    developmentYear
  }
}
`);

interface Reflection {
  id: string;
  blocker: string;
  process: string;
  solution: string;
}

interface Project {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  developmentTools: string;
  reflection: Reflection;
  developmentMonth: string;
  developmentYear: number;
}

interface ProjectsData {
  projectsForHome: Project[];
}

const monthMap: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const Projects = () => {
  const { loading, error, data } = useQuery<ProjectsData>(PROJECTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  if (!data || !data.projectsForHome) return <p>No data available</p>;

  // Sort projects by developmentYear and developmentMonth in descending order
  const sortedProjects = [...data.projectsForHome].sort((a, b) => {
    const yearDiff = b.developmentYear - a.developmentYear;
    if (yearDiff !== 0) return yearDiff;

    const monthDiff =
      monthMap[b.developmentMonth] - monthMap[a.developmentMonth];
    return monthDiff;
  });

  console.log("Sorted Projects:", sortedProjects);

  return (
    <Layout grid>
      {sortedProjects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Layout>
  );
};

export default Projects;

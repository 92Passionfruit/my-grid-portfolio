import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";

const projects = [
  {
    id: "project_01",
    title: "Employee Satisfaction Form",
    link: "https://92passionfruit.github.io/employee-satisfaction-form/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczPd-H1cvKLbQ6JnPuBdEAgkuqoU-bt2RTTY-NUuuqyEuGQ4WED4dDPH5Pa77K-SHHnX-gDIlyzk21iKefSFWk5l_R5_s9UjGFpF1zZZb8ZCICqmd8Iv=w2400",
    description:
      "A digital form to gage employee satifaction at a company through a series of scaling, checkbox and short answer questions.",
    developmentTools: "HTML, CSS",
    reflection: {
      id: "reflection_01",
      blocker:
        "The 'text-align' property wasn't consistently centering all elements in the DOM.",
      process: "ChatGPT/YouTube/forum research.",
      solution:
        "Wrapped the form in a <div> container with a specific class and applied margin: 0 auto; to achieve consistent centering",
    },
    developmentMonth: "February",
    developmentYear: 2024,
  },
  {
    id: "project_02",
    title: "Text-based Adventure Game",
    link: "https://92passionfruit.github.io/emilycult/",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczMuLXkjlkxtXTiY5UOY7gvHhdNbEX4yHAgkaRtMgQfDcwVC-qOkOo-dA7gvKViEE49ECeVv0hA-SeoEjuB0rEx1F7iDIUhatkDf-vgFlz7XB7Rir5Jw=w2400",
    description:
      "A satirical cult-themed, text-based game customised for someone's birthday with a winGame function linking them to their present.",
    developmentTools: "Vanilla JavaScript, HTML, CSS",
    reflection: {
      id: "reflection_02",
      blocker:
        "My event listener function to use the character name (options on buttons) selected by the player later in a template literal was not working.",
      process:
        "Google, forums, ChatGPT, parking the problem, peer review (hobby-coder acquaintance), console testing",
      solution:
        "The function wasn't being called as the template literal was in an object before the function was defined. An order adjustment fixed this.",
    },
    developmentMonth: "March",
    developmentYear: 2024,
  },
  {
    id: "project_03",
    title: "Card Creator",
    link: "https://youtu.be/bGIBAsnBE80",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczMJUCvKZbJZopXeNqhH1w_OFHREk_V6t-vt2pOh4TY7MHEWgIfIcLHLyfkeBzMWvD4kWgrF-5Y9lZ3OF5Pup3Ti9hIo1sxCjzygJdeoHy1WeotulilO=w2400",
    description:
      "A CRUD app that allows users with an account to build their own library of custom trading cards. Users are prompted to input data that is formatted into a digital card.",
    developmentTools: "Ruby on Rails, Bootstrap, HTML, CSS",
    reflection: {
      id: "reflection_03",
      blocker:
        "Destroy method wasn't being processed correctly (for card or session deletion).",
      process:
        "Google, forums, ChatGPT, peer review (internship mentor), console testing, parking the problem, making connections between multiple problems",
      solution:
        "TThe Turbo-rails gem intercepted form submissions, leading to routing errors for DELETE requests. An additional attribute was needed ('data-turbo-method': :delete) to ensure the correct handling of DELETE requests in both HTML and Turbo-rails forms.",
    },
    developmentMonth: "April",
    developmentYear: 2024,
  },
  {
    id: "project_04",
    title: "Shopping List",
    link: "https://youtu.be/njVuJzu4fLU",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczMr2pSkZpXCw82GmKI2Q-r92kEp1oPkLIVmmPP0mMElw7CrbZXJpt83Exis64PGqePxlYcgQdUjv8m-oFY3rHs1MCUw2MAFIvRa-0fEd2Mmm04Y1uCz=w2400",
    description:
      "A CRUD shopping list that allows the user to colour-code their list items for a more efficient shopping experience.",
    developmentTools: "React, Javascript, HTML, CSS",
    reflection: {
      id: "reflection_04",
      blocker: "building a color palette drawer",
      process:
        "YouTube tutorials, forums e.g. StackOverflow/GitHub, ChatGPT, trial and error",
      solution:
        "Discovered 'React Color' library/package with color pickers that I managed to intergrate into my codebase",
    },
    developmentMonth: "April",
    developmentYear: 2024,
  },
  {
    id: "project_05",
    title: "Memory Quest",
    link: "https://youtu.be/w6O_4_EZH1o",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczOYnM-nx7Gym1cvmjmclPy806B1C3g2PcIuF7N5Db2fiNd9eRuKj6bpSfLb30TiDQagABOmEEkhrvdXbi3a5ksm-0-nYuatGaGsIpu0BtniH7kXAUSO=w2400",
    description:
      "A card-matching memory game customised to an individual's interests for their birthday with a message revealed upon winning.",
    developmentTools: "React, Typescript, Javascript, HTML, CSS",
    reflection: {
      id: "reflection_05",
      blocker:
        "Ternary operators and if statements were getting complicated and triggering errors",
      process: "research, YouTube, trial and error, ChatGPT",
      solution:
        "learnt about React's conditional rendering with logical ANDs (&&) and used them in place of vanilla JavaScipt methods",
    },
    developmentMonth: "May",
    developmentYear: 2024,
  },
  {
    id: "project_06",
    title: "Developer Portfolio",
    link: "Currently viewing",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczNXlwzskE65sHSuoMTouLDOcVLdmj6hkE9s2FxlqJGkOLz0LXnp-ci1v-nHUAS28-EpAPxCP4wq23IrlO4EbLTQXKo_EO_2j4xwZktndMxnEjoIsFTg=w2400",
    description:
      "A digital portfolio with project fields that are queried from a server-side database and displayed in an interactive grid of project cards that detail and exemplify my learning/skills.",
    developmentTools: "GraphQL, Apollo, React, Typescript",
    reflection: {
      id: "reflection_06",
      blocker:
        "GraphQL does not allow mixed field types and, while my custom MonthYear scalar parsed/serialized correctly, the code was becoming increasingly complex to meet both Typescript and GraphQL's type definition needs. ",
      process:
        "Parked the problem, rubber duck debugging, YouTube/ChatGPT research",
      solution:
        "Server-side, I simplified the code by creating separate 'developmentMonth: String' and 'developmentYear: Int' fields. Client-side, I put them into a developmentDate container (and created one function to compare and sort both fields, returning projects in a latest-first grid.",
    },
    developmentMonth: "May",
    developmentYear: 2024,
  },
];

const mocks = {
  Query: () => ({
    projectsForHome: () => projects,
  }),
};

async function startApolloServer() {
  const schema = makeExecutableSchema({ typeDefs });
  const schemaWithMocks = addMocksToSchema({ schema, mocks });

  const server = new ApolloServer({ schema: schemaWithMocks });

  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Weight {
    id: String
    date: String
    weight: Float
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 

  type Query {
    weight: [Weight]
    # Reference query
    # getWeight(id: String!): Weight
  }
  


  type Mutation {
  addWeight(id: String!, date: String!, weight: Float!): Weight
  editWeight(id: String!, date: String!, weight: Float!): Weight
  deleteWeight(id: String!): Weight
  }
`;
const serverUrl = process.env.SERVER_URL || "http://localhost:4000";

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    // For query "weight" it returns this function
    weight: async () => {
      const url = `${serverUrl}/weight`;
      const response = await fetch(url);
      return await response.json();
    },
    // Reference Query resolver
    // getWeight: async (_, { id }) => {
    //   const url = `http://localhost:5000/getWeight/${id}`;
    //   const response = await fetch(url);
    //   return await response.json();
    // },
  },
  Mutation: {
    addWeight: async (_, { id, date, weight }) => {
      const url = `${serverUrl}/addWeight`;
      const newWeight = { id, date, weight };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWeight),
      });

      const result = await response.json();
      return result;
    },
    editWeight: async (_, { id, date, weight }) => {
      const url = `${serverUrl}/editWeight/${id}`;
      const updatedWeight = { date, weight };

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWeight),
      });
      const result = await response.json();
      return result;
    },
    deleteWeight: async (_, { id, date, weight }) => {
      const url = `${serverUrl}/deleteWeight/${id}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, weight }),
      });

      const result = await response.json();
      return result;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

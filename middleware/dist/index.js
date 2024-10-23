import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Weight {
    x: String
    y: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 

  type Query {
    weight: [Weight]
  }

  type Mutation {
  addWeight(x: String!, y: Int!): Weight
  editWeight(x: String!, y:Int!): Weight
  deleteWeight(x: String!): Weight
  }
`;
// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
    Query: {
        // For query "weight" it returns this function
        weight: async () => {
            const url = "http://localhost:5000/weight";
            const response = await fetch(url);
            return await response.json();
        },
    },
    Mutation: {
        addWeight: async (_, { x, y }) => {
            const url = "http://localhost:5000/add-weight";
            const newWeight = { x, y };
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
        editWeight: async (_, { x, y }) => {
            const url = "http://localhost:5000/edit-weight";
            const updatedWeight = { x, y };
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
        deleteWeight: async (_, { x, y }) => {
            const url = "http://localhost:5000/delete-weight";
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ x, y }),
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

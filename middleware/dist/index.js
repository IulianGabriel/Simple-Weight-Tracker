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
  }

`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        // Pentru query-ul "weight" sa imi returneze
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
            console.log(result);
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

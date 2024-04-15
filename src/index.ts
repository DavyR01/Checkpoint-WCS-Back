import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from "@apollo/server";
import dataSource from "../config/db"
import { CountryResolver } from "./resolvers/Countries";
import { ContinentResolver } from "./resolvers/Continents";

const start = async () => {
  await dataSource.initialize();
 
  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();

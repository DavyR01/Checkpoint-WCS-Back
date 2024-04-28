import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "./database/dbCheckpoint";
import { CountryResolver } from "./resolvers/Country";
import { injectDatasEurope, injectDatasAfrique, injectDatasAsie, injectDatasAmerique, injectDatasOceanie } from "./data/data";

const start = async () => {
   await dataSource.initialize();

   injectDatasEurope();
   injectDatasAfrique();
   injectDatasAsie();
   injectDatasAmerique();
   injectDatasOceanie();

   const schema = await buildSchema({
      resolvers: [CountryResolver],
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

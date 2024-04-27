import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dataSource from "./database/dbCheckpoint";
import { CountryResolver } from "./resolvers/Country";
import { Country } from "./entities/country";

const start = async () => {
   await dataSource.initialize();

   const countries = await Country.find();
   if (countries.length === 0) {
      const country = new Country;
      country.code = "FR";
      country.emoji = 'flagFr.png';
      country.name = "France"
   }


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

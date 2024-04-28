import { Country } from "../entities/country";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class CountryResolver {
   @Query(() => [Country])
   async getAllCountries() {
      return await Country.find();
   }
}
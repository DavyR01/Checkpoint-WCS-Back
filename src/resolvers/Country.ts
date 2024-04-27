import { Country } from "src/entities/country";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class CountryResolver {
   @Query(() => [Country])
   async getAllAds() {
      return await Country.find({
      });
   }
}
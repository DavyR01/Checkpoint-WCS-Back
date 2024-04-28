import { Country } from "../entities/country";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class CountryResolver {
   @Query(() => [Country])
   async getAllCountries() {
      return await Country.find();
   }

   @Query(() => Country)
   async getOneCountry(@Arg("code", {defaultValue: "FR"}) code:string): Promise<Country | null> {
      return await Country.findOne({
         where: {
            code
         }
      })
   }
}
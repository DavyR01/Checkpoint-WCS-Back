import { AddCountryInput } from "../inputs/CountryAdd";
import { Country } from "../entities/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class CountryResolver {
   @Query(() => [Country])
   async getAllCountries() {
      return await Country.find();
   }

   @Query(() => Country)
   async getOneCountry(@Arg("code", { defaultValue: "FR" }) code: string): Promise<Country | null> {
      return await Country.findOne({
         where: {
            code
         }
      })
   }

   @Query(() => [Country])
   async getCountriesByContinent(@Arg("continent", { defaultValue: "" }) continent?: string): Promise<Country[]> {
      return await Country.find({
         where: {
            continent
         }
      })
   }

   @Mutation(() => Country)
   async addOneCountry(@Arg("data") newCountry: AddCountryInput): Promise<Country> {
      const country = Country.save({
         ...newCountry
      })
      return country
   }
}
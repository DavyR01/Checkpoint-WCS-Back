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
      return await country
   }

   // En retournant une chaine de caractères
   @Mutation(() => String)
   async deleteOneCountry(@Arg("id") idToDelete: number) {
      const countryToDelete = await Country.findOneByOrFail({
         id: idToDelete
      })
      countryToDelete.remove()
      console.log('delete country OK');
      return "The country has been deleted"
   }

   // En retournant la Country supprimée en sortie
   @Mutation(() => Country)
   async deleteOneCountry2(@Arg("id") idToDelete: number) {
      const countryToDelete = await Country.findOneByOrFail({
         id: idToDelete
      })
      countryToDelete.remove()
      console.log('delete country OK');
      return countryToDelete
   }
}
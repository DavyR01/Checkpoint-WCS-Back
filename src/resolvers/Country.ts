import { AddCountryInput } from "../inputs/CountryAdd";
import { Country } from "../entities/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UpdateCountryInput } from "../inputs/CountryUpdate";

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

   // En retournant un boolean
   @Mutation(() => Boolean)
   async deleteOneCountry3(@Arg("id") idToDelete: number) {
      const countryToDelete = await Country.findOne({
         where: {
            id: idToDelete
         }
      })
      if (!countryToDelete) {
         throw new Error("no country founded")
      } else {
         countryToDelete.remove()
         console.log('delete country OK');
      }
      return true
   }


   // Gestion erreur avec try catch
   @Mutation(() => Country)
   async updateOneCountry(
      @Arg("id") idToUpdate: number,
      @Arg("data") data: UpdateCountryInput) {
         let countryToUpdate: any=""
         try {
            countryToUpdate = await Country.findOne({
               where: {id: idToUpdate}
            })
            Object.assign(countryToUpdate, data)
            await countryToUpdate.save()
         } catch (error) {
            throw new Error('Error during update : Country doesn\'t exist ?')
         }
         return countryToUpdate
   }


   @Mutation(() => Country)
   async updateOneCountry2(
      @Arg("id") idToUpdate: number,
      @Arg("data") data: UpdateCountryInput) {
      const countryToUpdate = await Country.findOne({
         where: {id: idToUpdate}
      })
      if (!countryToUpdate) {
         throw new Error ('Error during update the country !!')
      }
      Object.assign(countryToUpdate, data)
      countryToUpdate.save()
      return countryToUpdate
   }


}
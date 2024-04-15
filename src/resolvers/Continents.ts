import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Continent } from "../entities/continent";
import { continentRepository } from "../repositories/continentRepository";
import { ContinentCreateInput } from "../input/ContinentCreateInput";

@Resolver()
export class ContinentResolver {
   @Query(() => [Continent])
   async getAllContinents() {
      const continents = await continentRepository.find()
      return continents
   }

   @Mutation(() => Continent)
   async createContinent(
      @Arg("data") data: ContinentCreateInput) {
         const newContinent = {
            ...data
         }
         const result = await continentRepository.save(newContinent)
         return result
      }
}
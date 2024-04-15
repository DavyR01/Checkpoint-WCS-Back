import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CountryCreateInput } from "../input/CountryCreateInput";
import { Country } from "../entities/country";
import { countryRepository } from "../repositories/countryRepository";


@Resolver()
export class CountryResolver {

  @Query(() => [Country])
  async getAllCountries(){
     return await countryRepository.find()
  }

  // CREATE a country
  @Mutation(() => Country)
  async createCountry(
    @Arg("data") data: CountryCreateInput
  ): Promise<Country | null> {

    const newCountry = {
      ...data,
    };

    const result = await countryRepository.save(newCountry);
    return result;
  }
}


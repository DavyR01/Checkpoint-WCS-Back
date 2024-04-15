import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CountryCreateInput } from "../input/CountryCreateInput";
import { Country } from "../entities/country";
import { countryRepository } from "../repositories/countryRepository";


@Resolver()
export class CountryResolver {

  // READ all countries
  @Query(() => [Country])
  async getAllCountries() {
    return await countryRepository.find()
  }

  // READ one country
  @Query(() => Country)
  async getOneCountry(@Arg("code") code: string) {
    const country = await countryRepository.findOne({
      where: { code }
    })
    if (!country) {
      console.log("No country found with this code !");
      ;
    } else console.log('Country found');


    return country
  }

  // CREATE a country
  @Mutation(() => Country)
  async createCountry(
    @Arg("data") data: CountryCreateInput
  ) {

    const newCountry = {
      ...data,
    };

    const result = await countryRepository.save(newCountry);
    return result;
  }
}


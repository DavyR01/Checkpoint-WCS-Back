import dataSource from "../../config/db";
import { Country } from "../entities/country";

export const countryRepository = dataSource.getRepository(Country);

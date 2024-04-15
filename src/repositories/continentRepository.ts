import dataSource from "../../config/db";
import { Continent } from "../entities/continent";

export const continentRepository = dataSource.getRepository(Continent)
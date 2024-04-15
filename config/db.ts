import { DataSource } from "typeorm";
// import { Country } from "../src/entities/country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db-checkpoint-back.sql",
  synchronize: true,
  entities: [`./src/entities/*{.js,.ts}`],
  // entities: [Country],
  // logging: ["query", "error"],
});

export default dataSource;

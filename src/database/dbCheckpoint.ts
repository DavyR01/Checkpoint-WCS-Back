// import { Country } from "../entities/country";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "src/db_checkpoint.sqlite",
  entities: ["src/entities/*.ts"],
  // entities: [Country],
  synchronize: true,
    logging: ["query", "error"],
  // type: "postgres",
  // host: "db",
  // port: 5432,
  // username: "postgres",
  // password: "checkpoint",
});

export default dataSource;

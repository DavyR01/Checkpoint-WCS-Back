import { Country } from "src/entities/country";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  // type: "postgres",
  // host: "db",
  // port: 5432,
  // username: "postgres",
  // password: "checkpoint",
  database: "../db_checkpoint.sqlite",
  // entities: ["src/entities/*.ts"],
  entities: [Country],
  synchronize: true,
//   logging: ["query", "error"],
});

export default dataSource;

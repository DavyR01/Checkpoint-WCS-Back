import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./mydb.sql",
  synchronize: true,
  entities: [`./src/entities/*{.js,.ts}`],
  logging: ["query", "error"],
});

export default dataSource;

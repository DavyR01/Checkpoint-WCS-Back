import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Country } from "./country";

@Entity()
@ObjectType()
export class Continent {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Country, country => country.continents)
  countries: Country[];
}

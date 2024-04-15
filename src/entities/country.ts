import { ObjectType, Field } from "type-graphql";
import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Continent } from "./continent";

@Entity()
@ObjectType()
export class Country {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;
 
  @Field(() => Continent)
  @ManyToOne(() => Continent, continent => continent.countries)
  continents: Continent;

}

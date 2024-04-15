import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class Continent {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;
}

import { ObjectType, Field } from "type-graphql";
import { Entity, Column, PrimaryColumn } from "typeorm";

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

}

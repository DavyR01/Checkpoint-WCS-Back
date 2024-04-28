import {
   BaseEntity,
   Column,
   Entity,
   PrimaryGeneratedColumn,
 } from "typeorm";
 import { Field, ObjectType } from "type-graphql";
 
 @ObjectType()
 @Entity()
 export class Country extends BaseEntity {
   @Field()
   @PrimaryGeneratedColumn()
   id: number;
   //  @PrimaryGeneratedColumn("uuid")
  //  id: string;
 
   @Field()
   @Column()
   code: string;
 
   @Field()
   @Column()
   name: string;

   @Field({nullable: true})
   @Column({nullable: true})
   emoji?: string; 

   @Field()
   @Column({default: ""})
   continent: string; 
 }
 
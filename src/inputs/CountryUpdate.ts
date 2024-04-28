import { Country } from "../entities/country";
import { Field, InputType } from "type-graphql";


@InputType()
export class UpdateCountryInput implements Partial<Country>{
   @Field()
   code: string;
 
   @Field()
   name: string;

   @Field({ nullable: true })
   emoji?: string;  

   @Field()
   continent: string;    
}
import { Country } from "src/entities/country";
import { Field, InputType } from "type-graphql";

@InputType()
export class AddCountryInput implements Partial<Country>{
   @Field()
   code: string;
 
   @Field()
   name: string;

   @Field({ nullable: true })
   emoji?: string;  

   @Field()
   continent: string;    
}
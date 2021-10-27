import { Field, ID, ObjectType } from "type-graphql";
import Skill from "./Skill";

@ObjectType()
class Wilder {
    @Field((type) => ID)
    id!: string;
    @Field()
    name!: string;
    @Field()
    skills!: string;
    @Field()
    city!: string;
}
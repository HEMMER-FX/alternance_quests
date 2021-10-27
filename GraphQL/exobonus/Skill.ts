import { Field, ID, Int, ObjectType } from "type-graphql"

@ObjectType()
class Skill {
    @Field(type => ID)
    id!: string
    @Field()
    title!: string
    @Field()
    votes!: number
}

export default Skill;
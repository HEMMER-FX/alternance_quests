import { buildSchema } from "graphql";
import "reflect-metadata";
import WilderResolver from './WilderResolver';

async function start() {
    const schema = await buildSchema({
        resolvers: [WilderResolver]
    });
    const server = new ApolloServer({
        schema
    })
    const { url } = await server.listen(4000);
    console.log(`Server runnning`);
}

start()
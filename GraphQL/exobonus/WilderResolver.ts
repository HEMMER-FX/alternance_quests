import { Query, Resolver } from "type-graphql";
import Wilder from './Wilder';

@Resolver(Wilder)
class WilderResolver {
    @Query(returns => [Wilder])
    allWilders() {
        return [{id: "idtest",name: "Thierry", city:"Paris", skills:[]}]
    }
}

export default WilderResolver
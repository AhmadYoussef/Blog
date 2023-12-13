import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {AuthLink} from "@/authLink";

// Validate that authLink is defined before using it

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: AuthLink,
    // link: AuthLink,
    cache: new InMemoryCache(),
});

export default client;

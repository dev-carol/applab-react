import { ApolloClient, InMemoryCache } from "@apollo/client";

export  const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7ffsh0vu701xr2dob5gzy/master',
    cache: new InMemoryCache()
})

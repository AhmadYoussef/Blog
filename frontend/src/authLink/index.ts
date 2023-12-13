// Create a middleware to set the authentication header
import {setContext} from "@apollo/client/link/context";
import {HttpLink} from "@apollo/client";

// Your authentication token
const authToken = process.env.AUTH_TOKEN;

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: authToken ? `Bearer ${authToken}` : "",
        },
    };
});

const httpLink = new HttpLink({uri: process.env.STRAPI_ADDRESS || ""}); // Assuming STRAPI_ADDRESS is a valid URL

// export const AuthLink = authLink.concat(httpLink)
export const AuthLink = process.env.STRAPI_ADDRESS;


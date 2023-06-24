import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwt_decode from "jwt-decode";

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  UNAUTHENTICATED,
} from "constants/constants";
import possibleTypes from "./possibleTypes.json";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Access-Control-Allow-Origin": "*",
    },
  };
});

const refreshLink = new TokenRefreshLink({
  accessTokenField: "newToken",
  isTokenValidOrUndefined: () => {
    const token: any = localStorage.getItem(ACCESS_TOKEN_KEY);
    const decode: any = jwt_decode(token);

    if (token && token !== "null" && decode?.exp * 1000 > Date.now()) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  },
  fetchAccessToken: async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({
        query: `
          mutation refreshToken {
            refreshToken {
              accessToken
              refreshToken
              user {
                businessEmail
                createdAt
                email
                id
                isActive
                isAdmin
                organizationDomain
                organizationName
                organizationUrl
                phone
                position
                updatedAt
                }
              }
            }
          }
        `,
      }),
    });
    const json = await response.json();
    return json;
  },
  handleFetch: () => {},
  handleResponse: () => (response: any) => {
    if (!response) {
      return { newToken: null };
    } else {
      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        response?.data?.refreshToken?.accessToken
      );
      localStorage.setItem(
        REFRESH_TOKEN_KEY,
        response?.data?.refreshToken?.refreshToken
      );

      return {
        newToken: response?.data?.refreshToken?.accessToken,
      };
    }
  },
  handleError: (error) => {
    console.error("Cannot refresh access token:", error);
  },
});

const errorLink = onError(({ networkError, graphQLErrors, response }) => {
  //@ts-ignore
  if (response?.errors[0].message === UNAUTHENTICATED) {
    localStorage.clear();
    window.location.reload();
  }
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (process.env.NODE_ENV === "development") {
        console.error(`[Graphql Errors]: ${JSON.stringify(err)}`);
      }
    }
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// setup your client
const token = localStorage.getItem(ACCESS_TOKEN_KEY);

export const client = new ApolloClient({
  link: token
    ? errorLink.concat(authLink).concat(refreshLink).concat(httpLink)
    : errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache({
    possibleTypes: possibleTypes.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          feed: {
            keyArgs: ["sorts"],
          },
        },
      },
    },
  }),
  name: "sendtask",
  version: "1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first",
    },
    query: {
      fetchPolicy: "cache-first",
    },
  },
  connectToDevTools: import.meta.env.DEV,
});

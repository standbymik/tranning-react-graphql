import { HttpLink, ApolloClient, InMemoryCache } from 'apollo-boost'
import { setContext } from 'apollo-link-context';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

function applyWsLink(httpLink) {
    const wsLink = new WebSocketLink({
        uri: `ws://localhost:3000/subscriptions`,
        options: {
            reconnect: true
        }
    });

    const link = split(
        // split based on operation type
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query);
            return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
    );
    return link
}

function createApolloClient(store) {

    const authLink = setContext((_, { headers }) => {
        const state = store.getState()
        const token = state.auth.token
        if (!token) {
            return {}
        }
        return {
            headers: {
                ...headers,
                authorization: token ? `${token}` : "",
            }
        }
    });




    const httpLink = new HttpLink({
        uri: 'http://localhost:3000/graphql'
    })

    const link = applyWsLink(authLink.concat(httpLink))

    const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    })

    return client
}

export default createApolloClient